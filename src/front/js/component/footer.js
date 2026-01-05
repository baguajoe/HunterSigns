import React from "react";
import { Link } from "react-router-dom";
import hunterLogo from "../../img/hunter_signs_logo__new__op_800x228.jpg";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" }
    ];

    const services = [
        "Vehicle Wraps",
        "Storefront Signs",
        "Banners & Displays",
        "LED Signs",
        "Wooden Signs",
        "Dimensional Letters"
    ];

    return (
        <footer
            style={{
                background: "#0a0a0a",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                padding: "80px 0 0"
            }}
        >
            <div className="container">
                <div className="row g-5 mb-5">
                    {/* Brand Column */}
                    <div className="col-lg-4 col-md-6">
                        <Link to="/" style={{ display: "inline-block", marginBottom: "25px" }}>
                            <img
                                src={hunterLogo}
                                alt="Hunter Signs"
                                style={{ height: "50px", width: "auto" }}
                            />
                        </Link>
                        <p style={{ color: "#b0b0b0", lineHeight: "1.8", marginBottom: "25px" }}>
                            Boston's trusted sign company since 1990. We create custom signage 
                            solutions that help businesses stand out and succeed.
                        </p>
                        <div className="d-flex gap-3">
                            {["facebook", "instagram", "twitter"].map((social) => (
                                <a
                                    key={social}
                                    href={`https://${social}.com`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        background: "#1a1a1a",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#b0b0b0",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        fontSize: "1.1rem"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = "#D4A017";
                                        e.target.style.color = "#000";
                                        e.target.style.borderColor = "#D4A017";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = "#1a1a1a";
                                        e.target.style.color = "#b0b0b0";
                                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                                    }}
                                >
                                    {social === "facebook" && "f"}
                                    {social === "instagram" && "📷"}
                                    {social === "twitter" && "𝕏"}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h5
                            style={{
                                color: "#D4A017",
                                fontWeight: "700",
                                marginBottom: "25px",
                                fontSize: "1rem",
                                letterSpacing: "1px"
                            }}
                        >
                            QUICK LINKS
                        </h5>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {quickLinks.map((link) => (
                                <li key={link.name} style={{ marginBottom: "12px" }}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            color: "#b0b0b0",
                                            textDecoration: "none",
                                            transition: "all 0.3s ease",
                                            display: "inline-block"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = "#D4A017";
                                            e.target.style.paddingLeft = "10px";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = "#b0b0b0";
                                            e.target.style.paddingLeft = "0";
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-lg-3 col-md-6">
                        <h5
                            style={{
                                color: "#D4A017",
                                fontWeight: "700",
                                marginBottom: "25px",
                                fontSize: "1rem",
                                letterSpacing: "1px"
                            }}
                        >
                            SERVICES
                        </h5>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {services.map((service) => (
                                <li key={service} style={{ marginBottom: "12px" }}>
                                    <Link
                                        to="/services"
                                        style={{
                                            color: "#b0b0b0",
                                            textDecoration: "none",
                                            transition: "all 0.3s ease",
                                            display: "inline-block"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = "#D4A017";
                                            e.target.style.paddingLeft = "10px";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = "#b0b0b0";
                                            e.target.style.paddingLeft = "0";
                                        }}
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <h5
                            style={{
                                color: "#D4A017",
                                fontWeight: "700",
                                marginBottom: "25px",
                                fontSize: "1rem",
                                letterSpacing: "1px"
                            }}
                        >
                            CONTACT US
                        </h5>
                        <div style={{ marginBottom: "15px" }}>
                            <p style={{ color: "#fff", margin: "0 0 5px 0", fontWeight: "500" }}>
                                📍 Location
                            </p>
                            <p style={{ color: "#b0b0b0", margin: 0 }}>
                                Dorchester, MA<br />Boston Area
                            </p>
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <p style={{ color: "#fff", margin: "0 0 5px 0", fontWeight: "500" }}>
                                📞 Phone
                            </p>
                            <p style={{ color: "#b0b0b0", margin: 0 }}>
                                (617) 555-SIGN
                            </p>
                        </div>
                        <div>
                            <p style={{ color: "#fff", margin: "0 0 5px 0", fontWeight: "500" }}>
                                ✉️ Email
                            </p>
                            <p style={{ color: "#b0b0b0", margin: 0 }}>
                                info@huntersigns.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        padding: "25px 0",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "15px"
                    }}
                >
                    <p style={{ color: "#707070", margin: 0, fontSize: "0.9rem" }}>
                        © {currentYear} Hunter Signs. All rights reserved.
                    </p>
                    <div className="d-flex gap-4">
                        <a
                            href="#"
                            style={{
                                color: "#707070",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                transition: "color 0.3s ease"
                            }}
                            onMouseEnter={(e) => e.target.style.color = "#D4A017"}
                            onMouseLeave={(e) => e.target.style.color = "#707070"}
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            style={{
                                color: "#707070",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                transition: "color 0.3s ease"
                            }}
                            onMouseEnter={(e) => e.target.style.color = "#D4A017"}
                            onMouseLeave={(e) => e.target.style.color = "#707070"}
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;