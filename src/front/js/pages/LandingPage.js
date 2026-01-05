import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Import a few gallery images for the showcase
import truck1 from "../../img/trucking/Trucks~~element160.jpg";
import storefront1 from "../../img/storefront/StorefrontElement.jpg";
import banner1 from "../../img/banner/banner_liberty.jpg";
import awning1 from "../../img/awnings/Awnings~~element111.jpg";

const LandingPage = () => {
    useEffect(() => {
        // Simple fade-in animation on scroll
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            icon: "🚚",
            title: "Vehicle Wraps",
            description: "Turn your fleet into mobile billboards with custom vehicle graphics and wraps."
        },
        {
            icon: "🏪",
            title: "Storefront Signs",
            description: "Eye-catching storefront signage that brings customers through your door."
        },
        {
            icon: "🎯",
            title: "Banners & Displays",
            description: "High-impact banners and displays for events, promotions, and trade shows."
        },
        {
            icon: "💡",
            title: "LED & Lighted Signs",
            description: "Illuminate your brand with energy-efficient LED and backlit signage."
        },
        {
            icon: "🪵",
            title: "Custom Wood Signs",
            description: "Handcrafted wooden signs that add warmth and character to any space."
        },
        {
            icon: "🔤",
            title: "Dimensional Letters",
            description: "Metal and plastic dimensional letters for a professional, polished look."
        }
    ];

    const stats = [
        { number: "30+", label: "Years Experience" },
        { number: "5000+", label: "Signs Created" },
        { number: "100%", label: "Satisfaction" },
        { number: "24/7", label: "Support" }
    ];

    return (
        <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
            {/* Hero Section */}
            <section
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    overflow: "hidden",
                    padding: "0 20px"
                }}
            >
                {/* Background Gradient Orb */}
                <div
                    style={{
                        position: "absolute",
                        top: "-30%",
                        right: "-20%",
                        width: "800px",
                        height: "800px",
                        background: "radial-gradient(circle, rgba(212, 160, 23, 0.15) 0%, transparent 70%)",
                        borderRadius: "50%",
                        animation: "pulse 8s ease-in-out infinite"
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-40%",
                        left: "-10%",
                        width: "600px",
                        height: "600px",
                        background: "radial-gradient(circle, rgba(212, 160, 23, 0.1) 0%, transparent 70%)",
                        borderRadius: "50%",
                        animation: "pulse 10s ease-in-out infinite reverse"
                    }}
                />

                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <p
                                style={{
                                    color: "#D4A017",
                                    fontWeight: "600",
                                    letterSpacing: "3px",
                                    fontSize: "0.9rem",
                                    marginBottom: "20px"
                                }}
                            >
                                BOSTON'S PREMIER SIGN COMPANY
                            </p>
                            <h1
                                style={{
                                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                    fontWeight: "800",
                                    color: "#fff",
                                    lineHeight: "1.1",
                                    marginBottom: "25px"
                                }}
                            >
                                Signs That Make Your{" "}
                                <span style={{ color: "#D4A017" }}>Business Stand Out</span>
                            </h1>
                            <p
                                style={{
                                    fontSize: "1.2rem",
                                    color: "#b0b0b0",
                                    maxWidth: "500px",
                                    marginBottom: "35px",
                                    lineHeight: "1.8"
                                }}
                            >
                                From vehicle wraps to storefront signs, we create custom signage 
                                that captures attention and drives results for your business.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Link
                                    to="/quote"
                                    style={{
                                        background: "linear-gradient(135deg, #D4A017 0%, #b8860b 100%)",
                                        color: "#000",
                                        padding: "16px 36px",
                                        borderRadius: "8px",
                                        fontWeight: "700",
                                        fontSize: "1rem",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        display: "inline-block"
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
                                    Get Free Quote
                                </Link>
                                <Link
                                    to="/gallery"
                                    style={{
                                        background: "transparent",
                                        color: "#D4A017",
                                        padding: "16px 36px",
                                        borderRadius: "8px",
                                        fontWeight: "600",
                                        fontSize: "1rem",
                                        textDecoration: "none",
                                        border: "2px solid #D4A017",
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
                                    View Our Work
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image Grid */}
                        <div className="col-lg-6">
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, 1fr)",
                                    gap: "15px",
                                    transform: "rotate(3deg)"
                                }}
                            >
                                {[truck1, storefront1, banner1, awning1].map((img, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            borderRadius: "16px",
                                            overflow: "hidden",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            transform: idx % 2 === 0 ? "translateY(-20px)" : "translateY(20px)",
                                            transition: "all 0.5s ease"
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`Work sample ${idx + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "200px",
                                                objectFit: "cover",
                                                transition: "transform 0.5s ease"
                                            }}
                                            onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                                            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ padding: "60px 20px", background: "#121212" }}>
                <div className="container">
                    <div className="row">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="col-6 col-md-3 text-center mb-4 mb-md-0">
                                <h2
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: "800",
                                        color: "#D4A017",
                                        marginBottom: "5px"
                                    }}
                                >
                                    {stat.number}
                                </h2>
                                <p style={{ color: "#b0b0b0", margin: 0 }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section style={{ padding: "100px 20px" }}>
                <div className="container">
                    <div className="text-center mb-5 fade-in">
                        <p style={{ color: "#D4A017", fontWeight: "600", letterSpacing: "2px", marginBottom: "15px" }}>
                            WHAT WE DO
                        </p>
                        <h2 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}>
                            Our Services
                        </h2>
                        <p style={{ color: "#b0b0b0", maxWidth: "600px", margin: "0 auto" }}>
                            From concept to installation, we provide complete signage solutions 
                            tailored to your business needs.
                        </p>
                    </div>

                    <div className="row g-4">
                        {services.map((service, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4 fade-in">
                                <div
                                    style={{
                                        background: "#1a1a1a",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "16px",
                                        padding: "35px 30px",
                                        height: "100%",
                                        transition: "all 0.3s ease",
                                        cursor: "default"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-10px)";
                                        e.currentTarget.style.borderColor = "#D4A017";
                                        e.currentTarget.style.boxShadow = "0 0 40px rgba(212, 160, 23, 0.15)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "2.5rem",
                                            marginBottom: "20px"
                                        }}
                                    >
                                        {service.icon}
                                    </div>
                                    <h4 style={{ color: "#fff", fontWeight: "600", marginBottom: "15px" }}>
                                        {service.title}
                                    </h4>
                                    <p style={{ color: "#b0b0b0", margin: 0, lineHeight: "1.7" }}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5 fade-in">
                        <Link
                            to="/services"
                            style={{
                                color: "#D4A017",
                                fontWeight: "600",
                                fontSize: "1.1rem",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => e.target.style.gap = "15px"}
                            onMouseLeave={(e) => e.target.style.gap = "10px"}
                        >
                            View All Services →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                style={{
                    padding: "100px 20px",
                    background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "600px",
                        height: "600px",
                        background: "radial-gradient(circle, rgba(212, 160, 23, 0.1) 0%, transparent 70%)",
                        borderRadius: "50%"
                    }}
                />
                <div className="container text-center position-relative">
                    <h2
                        style={{
                            color: "#fff",
                            fontSize: "2.5rem",
                            fontWeight: "700",
                            marginBottom: "20px"
                        }}
                        className="fade-in"
                    >
                        Ready to Elevate Your Brand?
                    </h2>
                    <p
                        style={{
                            color: "#b0b0b0",
                            fontSize: "1.2rem",
                            maxWidth: "600px",
                            margin: "0 auto 35px"
                        }}
                        className="fade-in"
                    >
                        Let's discuss your signage needs and create something amazing together. 
                        Get a free consultation today.
                    </p>
                    <Link
                        to="/quote"
                        style={{
                            background: "linear-gradient(135deg, #D4A017 0%, #b8860b 100%)",
                            color: "#000",
                            padding: "18px 50px",
                            borderRadius: "8px",
                            fontWeight: "700",
                            fontSize: "1.1rem",
                            textDecoration: "none",
                            display: "inline-block",
                            transition: "all 0.3s ease"
                        }}
                        className="fade-in"
                        onMouseEnter={(e) => {
                            e.target.style.transform = "translateY(-3px)";
                            e.target.style.boxShadow = "0 0 50px rgba(212, 160, 23, 0.5)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = "none";
                        }}
                    >
                        Get Your Free Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;