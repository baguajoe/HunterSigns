import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the form data to your backend
        console.log("Form submitted:", formData);
        setSubmitted(true);
    };

    const contactInfo = [
        {
            icon: "📍",
            title: "Location",
            details: ["Dorchester, MA", "Boston Area"]
        },
        {
            icon: "📞",
            title: "Phone",
            details: ["(617) 555-SIGN", "Mon-Fri: 8am-6pm"]
        },
        {
            icon: "✉️",
            title: "Email",
            details: ["info@huntersigns.com", "quotes@huntersigns.com"]
        }
    ];

    const inputStyle = {
        width: "100%",
        padding: "14px 18px",
        background: "#1a1a1a",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "8px",
        color: "#fff",
        fontSize: "1rem",
        transition: "all 0.3s ease",
        outline: "none"
    };

    const inputFocusStyle = {
        borderColor: "#D4A017",
        boxShadow: "0 0 0 3px rgba(212, 160, 23, 0.1)"
    };

    return (
        <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
            {/* Hero Section */}
            <section
                style={{
                    padding: "100px 20px 60px",
                    textAlign: "center",
                    background: "linear-gradient(135deg, #121212 0%, #0a0a0a 100%)",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-40%",
                        right: "-20%",
                        width: "600px",
                        height: "600px",
                        background: "radial-gradient(circle, rgba(212, 160, 23, 0.1) 0%, transparent 70%)",
                        borderRadius: "50%"
                    }}
                />
                <div className="container position-relative">
                    <p style={{ color: "#D4A017", fontWeight: "600", letterSpacing: "3px", marginBottom: "15px" }}>
                        GET IN TOUCH
                    </p>
                    <h1 style={{ color: "#fff", fontSize: "3rem", fontWeight: "700", marginBottom: "20px" }}>
                        Contact Us
                    </h1>
                    <p style={{ color: "#b0b0b0", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
                        Ready to start your project? Have questions? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section style={{ padding: "80px 20px" }}>
                <div className="container">
                    <div className="row g-5">
                        {/* Contact Form */}
                        <div className="col-lg-7">
                            <div
                                style={{
                                    background: "#121212",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "20px",
                                    padding: "40px"
                                }}
                            >
                                <h3 style={{ color: "#fff", fontWeight: "700", marginBottom: "10px" }}>
                                    Request a Free Quote
                                </h3>
                                <p style={{ color: "#b0b0b0", marginBottom: "30px" }}>
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>

                                {submitted ? (
                                    <div
                                        style={{
                                            textAlign: "center",
                                            padding: "60px 20px"
                                        }}
                                    >
                                        <div style={{ fontSize: "4rem", marginBottom: "20px" }}>✅</div>
                                        <h3 style={{ color: "#D4A017", fontWeight: "700", marginBottom: "15px" }}>
                                            Thank You!
                                        </h3>
                                        <p style={{ color: "#b0b0b0" }}>
                                            We've received your message and will get back to you shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                                                    Your Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    style={inputStyle}
                                                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                                                    onBlur={(e) => {
                                                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                                                        e.target.style.boxShadow = "none";
                                                    }}
                                                    placeholder="John Smith"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    style={inputStyle}
                                                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                                                    onBlur={(e) => {
                                                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                                                        e.target.style.boxShadow = "none";
                                                    }}
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    style={inputStyle}
                                                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                                                    onBlur={(e) => {
                                                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                                                        e.target.style.boxShadow = "none";
                                                    }}
                                                    placeholder="(617) 555-1234"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                                                    Service Needed
                                                </label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    style={{ ...inputStyle, cursor: "pointer" }}
                                                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                                                    onBlur={(e) => {
                                                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                                                        e.target.style.boxShadow = "none";
                                                    }}
                                                >
                                                    <option value="">Select a service...</option>
                                                    <option value="vehicle-wraps">Vehicle Wraps & Graphics</option>
                                                    <option value="storefront">Storefront Signs</option>
                                                    <option value="banners">Banners & Displays</option>
                                                    <option value="led-signs">LED & Illuminated Signs</option>
                                                    <option value="wooden-signs">Custom Wooden Signs</option>
                                                    <option value="dimensional-letters">Dimensional Letters</option>
                                                    <option value="construction">Construction Signs</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                                                    Tell Us About Your Project *
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows="5"
                                                    style={{ ...inputStyle, resize: "vertical", minHeight: "150px" }}
                                                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                                                    onBlur={(e) => {
                                                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                                                        e.target.style.boxShadow = "none";
                                                    }}
                                                    placeholder="Describe your signage needs, dimensions, location, timeline, etc."
                                                />
                                            </div>
                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    style={{
                                                        width: "100%",
                                                        padding: "16px 32px",
                                                        background: "linear-gradient(135deg, #D4A017 0%, #b8860b 100%)",
                                                        color: "#000",
                                                        border: "none",
                                                        borderRadius: "8px",
                                                        fontWeight: "700",
                                                        fontSize: "1.1rem",
                                                        cursor: "pointer",
                                                        transition: "all 0.3s ease"
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.transform = "translateY(-3px)";
                                                        e.target.style.boxShadow = "0 0 40px rgba(212, 160, 23, 0.4)";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.transform = "translateY(0)";
                                                        e.target.style.boxShadow = "none";
                                                    }}
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-5">
                            <div style={{ marginBottom: "40px" }}>
                                <h3 style={{ color: "#fff", fontWeight: "700", marginBottom: "20px" }}>
                                    Contact Information
                                </h3>
                                <p style={{ color: "#b0b0b0", lineHeight: "1.8" }}>
                                    Stop by our shop, give us a call, or send us an email. 
                                    We're here to help with all your signage needs.
                                </p>
                            </div>

                            {contactInfo.map((info, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        background: "#121212",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "12px",
                                        padding: "25px",
                                        marginBottom: "20px",
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "20px",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "#D4A017";
                                        e.currentTarget.style.transform = "translateX(10px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                        e.currentTarget.style.transform = "translateX(0)";
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            background: "rgba(212, 160, 23, 0.15)",
                                            borderRadius: "10px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.5rem",
                                            flexShrink: 0
                                        }}
                                    >
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h5 style={{ color: "#D4A017", fontWeight: "600", marginBottom: "8px" }}>
                                            {info.title}
                                        </h5>
                                        {info.details.map((detail, didx) => (
                                            <p key={didx} style={{ color: "#b0b0b0", margin: "0 0 5px 0" }}>
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Business Hours */}
                            <div
                                style={{
                                    background: "#121212",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "12px",
                                    padding: "25px",
                                    marginTop: "30px"
                                }}
                            >
                                <h5 style={{ color: "#D4A017", fontWeight: "600", marginBottom: "20px" }}>
                                    🕐 Business Hours
                                </h5>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <span style={{ color: "#b0b0b0" }}>Monday - Friday</span>
                                    <span style={{ color: "#fff" }}>8:00 AM - 6:00 PM</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <span style={{ color: "#b0b0b0" }}>Saturday</span>
                                    <span style={{ color: "#fff" }}>9:00 AM - 2:00 PM</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <span style={{ color: "#b0b0b0" }}>Sunday</span>
                                    <span style={{ color: "#fff" }}>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;