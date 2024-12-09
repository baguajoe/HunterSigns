"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, Blueprint
from api.models import db, User, Customer, Product, Sale, Invoice
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


# User Routes
@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users]), 200

@api.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if not user:
        raise APIException("User not found", status_code=404)
    return jsonify(user.serialize()), 200

@api.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    if not data or not data.get('email') or not data.get('password'):
        raise APIException("Email and password are required", status_code=400)

    new_user = User(
        email=data['email'],
        password=data['password'],  # Consider hashing passwords
        is_active=data.get('is_active', True)
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201

@api.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    if not user:
        raise APIException("User not found", status_code=404)

    data = request.get_json()
    user.email = data.get('email', user.email)
    user.password = data.get('password', user.password)
    user.is_active = data.get('is_active', user.is_active)
    db.session.commit()
    return jsonify(user.serialize()), 200

@api.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if not user:
        raise APIException("User not found", status_code=404)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": f"User {id} deleted"}), 200


# Customer Routes
@api.route('/customers', methods=['GET'])
def get_customers():
    customers = Customer.query.all()
    return jsonify([customer.serialize() for customer in customers]), 200

@api.route('/customers/<int:id>', methods=['GET'])
def get_customer(id):
    customer = Customer.query.get(id)
    if not customer:
        raise APIException("Customer not found", status_code=404)
    return jsonify(customer.serialize()), 200

@api.route('/customers', methods=['POST'])
def create_customer():
    data = request.get_json()
    new_customer = Customer(
        name=data['name'],
        email=data['email'],
        phone=data.get('phone'),
        address=data.get('address'),
        company_name=data.get('company_name')
    )
    db.session.add(new_customer)
    db.session.commit()
    return jsonify(new_customer.serialize()), 201

@api.route('/customers/<int:id>', methods=['PUT'])
def update_customer(id):
    customer = Customer.query.get(id)
    if not customer:
        raise APIException("Customer not found", status_code=404)

    data = request.get_json()
    customer.name = data.get('name', customer.name)
    customer.email = data.get('email', customer.email)
    customer.phone = data.get('phone', customer.phone)
    customer.address = data.get('address', customer.address)
    customer.company_name = data.get('company_name', customer.company_name)
    db.session.commit()
    return jsonify(customer.serialize()), 200

@api.route('/customers/<int:id>', methods=['DELETE'])
def delete_customer(id):
    customer = Customer.query.get(id)
    if not customer:
        raise APIException("Customer not found", status_code=404)
    db.session.delete(customer)
    db.session.commit()
    return jsonify({"message": f"Customer {id} deleted"}), 200


# Product Routes
@api.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([product.serialize() for product in products]), 200

@api.route('/products/<int:id>', methods=['GET'])
def get_product(id):
    product = Product.query.get(id)
    if not product:
        raise APIException("Product not found", status_code=404)
    return jsonify(product.serialize()), 200

@api.route('/products', methods=['POST'])
def add_product():
    data = request.get_json()
    new_product = Product(
        name=data['name'],
        description=data.get('description'),
        price=data['price'],
        quantity_in_stock=data.get('quantity_in_stock', 0)
    )
    db.session.add(new_product)
    db.session.commit()
    return jsonify(new_product.serialize()), 201

@api.route('/products/<int:id>', methods=['PUT'])
def update_product(id):
    product = Product.query.get(id)
    if not product:
        raise APIException("Product not found", status_code=404)

    data = request.get_json()
    product.name = data.get('name', product.name)
    product.description = data.get('description', product.description)
    product.price = data.get('price', product.price)
    product.quantity_in_stock = data.get('quantity_in_stock', product.quantity_in_stock)
    db.session.commit()
    return jsonify(product.serialize()), 200

@api.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get(id)
    if not product:
        raise APIException("Product not found", status_code=404)
    db.session.delete(product)
    db.session.commit()
    return jsonify({"message": f"Product {id} deleted"}), 200


# Add routes for Sales and Invoices similarly...
# Sales Routes
@api.route('/sales', methods=['GET'])
def get_sales():
    """Fetch all sales records."""
    sales = Sale.query.all()
    return jsonify([sale.serialize() for sale in sales]), 200

@api.route('/sales/<int:id>', methods=['GET'])
def get_sale(id):
    """Fetch a single sale by ID."""
    sale = Sale.query.get(id)
    if not sale:
        raise APIException("Sale not found", status_code=404)
    return jsonify(sale.serialize()), 200

@api.route('/sales', methods=['POST'])
def create_sale():
    """Create a new sale."""
    data = request.get_json()
    new_sale = Sale(
        customer_id=data['customer_id'],
        product_id=data['product_id'],
        quantity=data['quantity'],
        total_price=data['total_price'],  # Ensure this is calculated or validated
        status=data.get('status', 'pending')  # Default to 'pending' if not provided
    )
    db.session.add(new_sale)
    db.session.commit()
    return jsonify(new_sale.serialize()), 201

@api.route('/sales/<int:id>', methods=['PUT'])
def update_sale(id):
    """Update an existing sale."""
    sale = Sale.query.get(id)
    if not sale:
        raise APIException("Sale not found", status_code=404)

    data = request.get_json()
    sale.customer_id = data.get('customer_id', sale.customer_id)
    sale.product_id = data.get('product_id', sale.product_id)
    sale.quantity = data.get('quantity', sale.quantity)
    sale.total_price = data.get('total_price', sale.total_price)
    sale.status = data.get('status', sale.status)
    db.session.commit()
    return jsonify(sale.serialize()), 200

@api.route('/sales/<int:id>', methods=['DELETE'])
def delete_sale(id):
    """Delete a sale by ID."""
    sale = Sale.query.get(id)
    if not sale:
        raise APIException("Sale not found", status_code=404)
    
    db.session.delete(sale)
    db.session.commit()
    return jsonify({"message": f"Sale {id} deleted"}), 200

# Add Inventory-specific routes if needed.
# Invoices Routes
# Inventory Routes

@api.route('/inventory/low-stock', methods=['GET'])
def get_low_stock_products():
    """Fetch products with low stock."""
    low_stock_threshold = 10  # Example threshold
    products = Product.query.filter(Product.quantity_in_stock <= low_stock_threshold).all()
    return jsonify([product.serialize() for product in products]), 200

@api.route('/inventory/replenish/<int:id>', methods=['POST'])
def replenish_stock(id):
    """Replenish stock for a specific product."""
    product = Product.query.get(id)
    if not product:
        raise APIException("Product not found", status_code=404)

    data = request.get_json()
    replenish_amount = data.get('amount')
    if not replenish_amount or replenish_amount <= 0:
        raise APIException("Replenish amount must be greater than 0", status_code=400)

    product.quantity_in_stock += replenish_amount
    db.session.commit()
    return jsonify(product.serialize()), 200

# Invoices Routes
@api.route('/invoices', methods=['GET'])
def get_invoices():
    """Fetch all invoices."""
    invoices = Invoice.query.all()
    return jsonify([invoice.serialize() for invoice in invoices]), 200

@api.route('/invoices/<int:id>', methods=['GET'])
def get_invoice(id):
    """Fetch a single invoice by ID."""
    invoice = Invoice.query.get(id)
    if not invoice:
        raise APIException("Invoice not found", status_code=404)
    return jsonify(invoice.serialize()), 200

@api.route('/invoices', methods=['POST'])
def create_invoice():
    """Generate a new invoice."""
    data = request.get_json()
    new_invoice = Invoice(
        sale_id=data['sale_id'],
        invoice_number=data['invoice_number'],
        amount=data['amount'],
        due_date=data['due_date'],
        status=data.get('status', 'unpaid')  # Default to 'unpaid'
    )
    db.session.add(new_invoice)
    db.session.commit()
    return jsonify(new_invoice.serialize()), 201

@api.route('/invoices/<int:id>', methods=['PUT'])
def update_invoice(id):
    """Update an existing invoice."""
    invoice = Invoice.query.get(id)
    if not invoice:
        raise APIException("Invoice not found", status_code=404)

    data = request.get_json()
    invoice.sale_id = data.get('sale_id', invoice.sale_id)
    invoice.invoice_number = data.get('invoice_number', invoice.invoice_number)
    invoice.amount = data.get('amount', invoice.amount)
    invoice.due_date = data.get('due_date', invoice.due_date)
    invoice.status = data.get('status', invoice.status)
    db.session.commit()
    return jsonify(invoice.serialize()), 200

@api.route('/invoices/<int:id>', methods=['DELETE'])
def delete_invoice(id):
    """Delete an invoice by ID."""
    invoice = Invoice.query.get(id)
    if not invoice:
        raise APIException("Invoice not found", status_code=404)
    
    db.session.delete(invoice)
    db.session.commit()
    return jsonify({"message": f"Invoice {id} deleted"}), 200

