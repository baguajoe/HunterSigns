import React, { useState } from "react";

const Quote = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1 - Project Type
        projectType: "",
        // Step 2 - Project Details
        description: "",
        quantity: "",
        dimensions: "",
        colors: "",
        installation: "",
        // Step 3 - Timeline & Budget
        deadline: "",
        budget: "",
        flexibility: "",
        // Step 4 - Contact Info
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
        howHeard: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const projectTypes = [
        { id: "vehicle-wrap", icon: "🚚", title: "Vehicle Wrap / Graphics", desc: "Cars, trucks, vans, fleet vehicles" },
        { id: "storefront", icon: "🏪", title: "Storefront Sign", desc: "Channel letters, awnings, window graphics" },
        { id: "banner", icon: "🎯", title: "Banners & Displays", desc: "Vinyl banners, trade show displays" },
        { id: "led-sign", icon: "💡", title: "LED / Illuminated Sign", desc: "Lighted signs, lightboxes" },
        { id: "dimensional", icon: "🔤", title: "Dimensional Letters", desc: "Metal, acrylic, or PVC letters" },
        { id: "wooden", icon: "🪵", title: "Wooden Sign", desc: "Carved, rustic, or painted wood" },
        { id: "construction", icon: "🏗️", title: "Construction / Job Site", desc: "Project signs, safety signage" },
        { id: "real-estate", icon: "🏠", title: "Real Estate Signs", desc: "Yard signs, post signs, riders" },
        { id: "other", icon: "✨", title: "Other / Custom", desc: "Something unique" }
    ];

    const budgetRanges = [
        "Under $500",
        "$500 - $1,000",
        "$1,000 - $2,500",
        "$2,500 - $5,000",
        "$5,000 - $10,000",
        "$10,000+",
        "Not sure yet"
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const selectProjectType = (type) => {
        setFormData({ ...formData, projectType: type });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Quote request submitted:", formData);
        setSubmitted(true);
    };

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

    const renderStepIndicator = () => (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "50px", gap: "10px" }}>
            {[1, 2, 3, 4].map((num) => (
                <div key={num} style={{ display: "flex", alignItems: "center" }}>
                    <div
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: step >= num ? "#D4A017" : "#1a1a1a",
                            border: step >= num ? "none" : "1px solid rgba(255,255,255,0.2)",
                            color: step >= num ? "#000" : "#707070",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "700",
                            fontSize: "0.9rem",
                            transition: "all 0.3s ease"
                        }}
                    >
                        {num}
                    </div>
                    {num < 4 && (
                        <div
                            style={{
                                width: "60px",
                                height: "2px",
                                background: step > num ? "#D4A017" : "rgba(255,255,255,0.1)",
                                marginLeft: "10px",
                                transition: "all 0.3s ease"
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );

    const renderStep1 = () => (
        <div>
            <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "15px", fontWeight: "700" }}>
                What type of sign do you need?
            </h2>
            <p style={{ color: "#b0b0b0", textAlign: "center", marginBottom: "40px" }}>
                Select the option that best describes your project
            </p>
            <div className="row g-3">
                {projectTypes.map((type) => (
                    <div key={type.id} className="col-md-6 col-lg-4">
                        <div
                            onClick={() => selectProjectType(type.id)}
                            style={{
                                background: formData.projectType === type.id ? "rgba(212, 160, 23, 0.15)" : "#1a1a1a",
                                border: formData.projectType === type.id ? "2px solid #D4A017" : "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                padding: "25px 20px",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                height: "100%"
                            }}
                            onMouseEnter={(e) => {
                                if (formData.projectType !== type.id) {
                                    e.currentTarget.style.borderColor = "rgba(212, 160, 23, 0.5)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (formData.projectType !== type.id) {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                }
                            }}
                        >
                            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{type.icon}</div>
                            <h5 style={{ color: "#fff", fontWeight: "600", marginBottom: "8px", fontSize: "1rem" }}>
                                {type.title}
                            </h5>
                            <p style={{ color: "#707070", margin: 0, fontSize: "0.85rem" }}>
                                {type.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <button
                    onClick={nextStep}
                    disabled={!formData.projectType}
                    style={{
                        background: formData.projectType ? "linear-gradient(135deg, #D4A017 0%, #b8860b 100%)" : "#333",
                        color: formData.projectType ? "#000" : "#666",
                        padding: "16px 50px",
                        borderRadius: "8px",
                        border: "none",
                        fontWeight: "700",
                        fontSize: "1rem",
                        cursor: formData.projectType ? "pointer" : "not-allowed",
                        transition: "all 0.3s ease"
                    }}
                >
                    Continue →
                </button>
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div>
            <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "15px", fontWeight: "700" }}>
                Tell us about your project
            </h2>
            <p style={{ color: "#b0b0b0", textAlign: "center", marginBottom: "40px" }}>
                The more details you provide, the more accurate your quote will be
            </p>
            <div className="row g-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
                <div className="col-12">
                    <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                        Describe your project *
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        style={{ ...inputStyle, resize: "vertical" }}
                        placeholder="What do you want the sign to say? Where will it be installed? Any specific design ideas?"
                        onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    />
                </div>
                <div className="col-md-6">
                    <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                        Quantity
                    </label>
                    <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="e.g., 1, 10, 50+"
                        onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    />
                </div>
                <div className="col-md-6">
                    <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                        Dimensions (if known)
                    </label>
                    <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="e.g., 4ft x 8ft, 24in x 36in"
                        onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    />
                </div>
                <div className="col-md-6">
                    <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                        Colors / Branding
                    </label>
                    <input
                        type="text"
                        name="colors"
                        value={formData.colors}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="e.g., Red & white, match logo"
                        onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    />
                </div>
                <div className="col-md-6">
                    <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                        Installation needed?
                    </label>
                    <select
                        name="installation"
                        value={formData.installation}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    >
                        <option value="">Select...</option>
                        <option value="yes">Yes, I need installation</option>
                        <option value="no">No, I'll install it myself</option>
                        <option value="not-sure">Not sure yet</option>
                    </select>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "40px" }}>
                <button
                    onClick={prevStep}
                    style={{
                        background: "transparent",
                        color: "#b0b0b0",
                        padding: "16px 40px",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                    }}
                >
                    ← Back
                </button>
                <button
                    onClick={nextStep}
                    disabled={!formData.description}
                    style={{
                        background: formData.description ? "linear-gradient(135deg, #D4A017 0%, #b8860b 100%)" : "#333",
                        color: formData.description ? "#000" : "#666",
                        padding: "16px 50px",
                        borderRadius: "8px",
                        border: "none",
                        fontWeight: "700",
                        cursor: formData.description ? "pointer" : "not-allowed",
                        transition: "all 0.3s ease"
                    }}
                >
                    Continue →
                </button>
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div>
            <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "15px", fontWeight: "700" }}>
                Timeline & Budget
            </h2>
            <p style={{ color: "#b0b0b0", textAlign: "center", marginBottom: "40px" }}>
                Help us understand your timeline and budget expectations
            </p>
            <div className="row g-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
                <div className="col-12">
                    <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                        When do you need this completed?
                    </label>
                    <select
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    >
                        <option value="">Select timeline...</option>
                        <option value="asap">ASAP / Rush order</option>
                        <option value="1-2-weeks">1-2 weeks</option>
                        <option value="2-4-weeks">2-4 weeks</option>
                        <option value="1-2-months">1-2 months</option>
                        <option value="flexible">Flexible / No rush</option>
                    </select>
                </div>
                <div className="col-12">
                    <label style={{ color: "#b0b0b0", display: "block", marginBottom: "15px", fontWeight: "500" }}>
                        What's your budget range?
                    </label>
                    <div className="row g-2">
                        {budgetRanges.map((range) => (
                            <div key={range} className="col-6 col-md-4">
                                <div
                                    onClick={() => setFormData({ ...formData, budget: range })}
                                    style={{
                                        background: formData.budget === range ? "rgba(212, 160, 23, 0.15)" : "#1a1a1a",
                                        border: formData.budget === range ? "2px solid #D4A017" : "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "8px",
                                        padding: "15px",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        color: formData.budget === range ? "#D4A017" : "#b0b0b0"
                                    }}
                                >
                                    {range}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-12">
                    <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                        Budget flexibility
                    </label>
                    <select
                        name="flexibility"
                        value={formData.flexibility}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                    >
                        <option value="">Select...</option>
                        <option value="strict">Strict budget - can't go over</option>
                        <option value="some">Some flexibility for the right solution</option>
                        <option value="flexible">Flexible - quality is priority</option>
                    </select>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "40px" }}>
                <button
                    onClick={prevStep}
                    style={{
                        background: "transparent",
                        color: "#b0b0b0",
                        padding: "16px 40px",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                    }}
                >
                    ← Back
                </button>
                <button
                    onClick={nextStep}
                    style={{
                        background: "linear-gradient(135deg, #D4A017 0%, #b8860b 100%)",
                        color: "#000",
                        padding: "16px 50px",
                        borderRadius: "8px",
                        border: "none",
                        fontWeight: "700",
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                    }}
                >
                    Continue →
                </button>
            </div>
        </div>
    );

    const renderStep4 = () => (
        <div>
            <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "15px", fontWeight: "700" }}>
                Your Contact Information
            </h2>
            <p style={{ color: "#b0b0b0", textAlign: "center", marginBottom: "40px" }}>
                We'll send your custom quote to the email below
            </p>
            <form onSubmit={handleSubmit}>
                <div className="row g-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
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
                            placeholder="John Smith"
                            onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
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
                            placeholder="john@company.com"
                            onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                        />
                    </div>
                    <div className="col-md-6">
                        <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={inputStyle}
                            placeholder="(617) 555-1234"
                            onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                        />
                    </div>
                    <div className="col-md-6">
                        <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Your Business LLC"
                            onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                        />
                    </div>
                    <div className="col-12">
                        <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                            Project Address (for installation)
                        </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="123 Main St, Boston, MA 02101"
                            onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                        />
                    </div>
                    <div className="col-12">
                        <label style={{ color: "#b0b0b0", display: "block", marginBottom: "8px", fontWeight: "500" }}>
                            How did you hear about us?
                        </label>
                        <select
                            name="howHeard"
                            value={formData.howHeard}
                            onChange={handleChange}
                            style={{ ...inputStyle, cursor: "pointer" }}
                            onFocus={(e) => { e.target.style.borderColor = "#D4A017"; }}
                            onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                        >
                            <option value="">Select...</option>
                            <option value="google">Google Search</option>
                            <option value="referral">Referral / Word of Mouth</option>
                            <option value="drove-by">Drove by your shop</option>
                            <option value="social">Social Media</option>
                            <option value="repeat">Returning Customer</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "40px" }}>
                    <button
                        type="button"
                        onClick={prevStep}
                        style={{
                            background: "transparent",
                            color: "#b0b0b0",
                            padding: "16px 40px",
                            borderRadius: "8px",
                            border: "1px solid rgba(255,255,255,0.2)",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                    >
                        ← Back
                    </button>
                    <button
                        type="submit"
                        style={{
                            background: "linear-gradient(135deg, #D4A017 0%, #b8860b 100%)",
                            color: "#000",
                            padding: "16px 50px",
                            borderRadius: "8px",
                            border: "none",
                            fontWeight: "700",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.boxShadow = "0 0 40px rgba(212, 160, 23, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.boxShadow = "none";
                        }}
                    >
                        Submit Quote Request
                    </button>
                </div>
            </form>
        </div>
    );

    const renderSuccess = () => (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    background: "rgba(212, 160, 23, 0.15)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 30px",
                    fontSize: "3rem"
                }}
            >
                ✓
            </div>
            <h2 style={{ color: "#D4A017", fontWeight: "700", marginBottom: "20px" }}>
                Quote Request Submitted!
            </h2>
            <p style={{ color: "#b0b0b0", maxWidth: "500px", margin: "0 auto 15px", fontSize: "1.1rem" }}>
                Thank you for your interest in Hunter Signs! We've received your quote request and will 
                review your project details.
            </p>
            <p style={{ color: "#b0b0b0", maxWidth: "500px", margin: "0 auto 30px" }}>
                Expect to hear from us within <strong style={{ color: "#fff" }}>24-48 hours</strong> with 
                a custom quote for your project.
            </p>
            <div
                style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "25px",
                    maxWidth: "400px",
                    margin: "0 auto 30px",
                    textAlign: "left"
                }}
            >
                <h5 style={{ color: "#fff", marginBottom: "15px", fontWeight: "600" }}>What happens next?</h5>
                <div style={{ color: "#b0b0b0", marginBottom: "10px" }}>
                    <span style={{ color: "#D4A017", marginRight: "10px" }}>1.</span>
                    We review your project details
                </div>
                <div style={{ color: "#b0b0b0", marginBottom: "10px" }}>
                    <span style={{ color: "#D4A017", marginRight: "10px" }}>2.</span>
                    Our team prepares a custom quote
                </div>
                <div style={{ color: "#b0b0b0" }}>
                    <span style={{ color: "#D4A017", marginRight: "10px" }}>3.</span>
                    We contact you to discuss details
                </div>
            </div>
            <a
                href="/"
                style={{
                    background: "transparent",
                    color: "#D4A017",
                    padding: "14px 32px",
                    borderRadius: "8px",
                    border: "2px solid #D4A017",
                    fontWeight: "600",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = "#D4A017";
                    e.target.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#D4A017";
                }}
            >
                Back to Home
            </a>
        </div>
    );

    return (
        <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
            {/* Header */}
            <section
                style={{
                    padding: "80px 20px 40px",
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
                        FREE ESTIMATE
                    </p>
                    <h1 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: "700", marginBottom: "15px" }}>
                        Get Your Custom Quote
                    </h1>
                    <p style={{ color: "#b0b0b0", maxWidth: "500px", margin: "0 auto" }}>
                        Answer a few questions about your project and we'll provide a detailed quote within 24-48 hours.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section style={{ padding: "40px 20px 100px" }}>
                <div className="container">
                    {!submitted && renderStepIndicator()}
                    
                    <div
                        style={{
                            background: "#121212",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "20px",
                            padding: "50px 30px",
                            maxWidth: "900px",
                            margin: "0 auto"
                        }}
                    >
                        {submitted ? renderSuccess() : (
                            <>
                                {step === 1 && renderStep1()}
                                {step === 2 && renderStep2()}
                                {step === 3 && renderStep3()}
                                {step === 4 && renderStep4()}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quote;