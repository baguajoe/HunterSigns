import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    useEffect(() => {
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
            title: "Vehicle Wraps & Graphics",
            description: "Transform your vehicles into mobile billboards. Our custom-designed wraps for cars, trucks, and fleets use long-lasting materials with professional installation.",
            features: ["Full & partial wraps", "Fleet branding", "Vinyl graphics", "Design services"],
            popular: true
        },
        {
            icon: "🏪",
            title: "Storefront Signs",
            description: "Make a lasting first impression with eye-catching storefront signage. From channel letters to window graphics, we create signs that attract customers.",
            features: ["Channel letters", "Window graphics", "Blade signs", "A-frame signs"]
        },
        {
            icon: "🎯",
            title: "Banners & Displays",
            description: "High-resolution printing for banners, posters, and trade show displays. Durable materials that are weather-resistant and fade-proof.",
            features: ["Vinyl banners", "Retractable displays", "Trade show graphics", "Event signage"]
        },
        {
            icon: "💡",
            title: "LED & Illuminated Signs",
            description: "Light up your business with energy-efficient LED and backlit signage. Perfect for maximum visibility day and night.",
            features: ["LED channel letters", "Lightboxes", "Neon alternatives", "Cabinet signs"]
        },
        {
            icon: "🪵",
            title: "Custom Wooden Signs",
            description: "Handcrafted wooden signs that add warmth and character. Perfect for businesses, homes, and special events.",
            features: ["Carved signs", "Rustic designs", "Monument signs", "Directional signs"]
        },
        {
            icon: "🔤",
            title: "Dimensional Letters",
            description: "Professional metal and plastic dimensional letters for a polished, corporate look. Interior and exterior options available.",
            features: ["Metal letters", "Acrylic letters", "PVC letters", "Mounted displays"]
        },
        {
            icon: "🏗️",
            title: "Construction & Job Site Signs",
            description: "Durable signage for construction sites, real estate properties, and temporary projects. Built to withstand the elements.",
            features: ["Site signs", "Safety signage", "Project boards", "Permit signs"]
        },
        {
            icon: "☂️",
            title: "Awnings & Canopies",
            description: "Custom awnings that combine branding with function. Provide shade while promoting your business.",
            features: ["Fabric awnings", "Metal awnings", "Backlit awnings", "Custom shapes"]
        }
    ];

    const process = [
        {
            step: "01",
            title: "Consultation",
            description: "We discuss your needs, goals, and budget to understand your vision."
        },
        {
            step: "02",
            title: "Design",
            description: "Our team creates custom designs and mockups for your approval."
        },
        {
            step: "03",
            title: "Production",
            description: "Using premium materials, we manufacture your signage in-house."
        },
        {
            step: "04",
            title: "Installation",
            description: "Professional installation ensures your sign looks perfect and lasts."
        }
    ];

    return (
        <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
            {/* Hero Section */}
            <section
                style={{
                    padding: "100px 20px 80px",
                    textAlign: "center",
                    background: "linear-gradient(135deg, #121212 0%, #0a0a0a 100%)",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-50%",
                        right: "-30%",
                        width: "700px",
                        height: "700px",
                        background: "radial-gradient(circle, rgba(212, 160, 23, 0.1) 0%, transparent 70%)",
                        borderRadius: "50%"
                    }}
                />
                <div className="container position-relative">
                    <p style={{ color: "#D4A017", fontWeight: "600", letterSpacing: "3px", marginBottom: "15px" }}>
                        WHAT WE OFFER
                    </p>
                    <h1 style={{ color: "#fff", fontSize: "3rem", fontWeight: "700", marginBottom: "20px" }}>
                        Our Services
                    </h1>
                    <p style={{ color: "#b0b0b0", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
                        From concept to installation, we provide complete signage solutions 
                        tailored to your business needs. Quality craftsmanship, every time.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ padding: "80px 20px" }}>
                <div className="container">
                    <div className="row g-4">
                        {services.map((service, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4 fade-in">
                                <div
                                    style={{
                                        background: "#1a1a1a",
                                        border: service.popular ? "2px solid #D4A017" : "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "16px",
                                        padding: "35px 30px",
                                        height: "100%",
                                        transition: "all 0.4s ease",
                                        position: "relative",
                                        overflow: "hidden"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-10px)";
                                        e.currentTarget.style.boxShadow = "0 20px 50px rgba(212, 160, 23, 0.15)";
                                        if (!service.popular) {
                                            e.currentTarget.style.borderColor = "#D4A017";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "none";
                                        if (!service.popular) {
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                        }
                                    }}
                                >
                                    {service.popular && (
                                        <span
                                            style={{
                                                position: "absolute",
                                                top: "15px",
                                                right: "15px",
                                                background: "#D4A017",
                                                color: "#000",
                                                padding: "4px 12px",
                                                borderRadius: "20px",
                                                fontSize: "0.75rem",
                                                fontWeight: "700"
                                            }}
                                        >
                                            POPULAR
                                        </span>
                                    )}
                                    <div style={{ fontSize: "3rem", marginBottom: "20px" }}>
                                        {service.icon}
                                    </div>
                                    <h3 style={{ color: "#fff", fontWeight: "600", marginBottom: "15px", fontSize: "1.3rem" }}>
                                        {service.title}
                                    </h3>
                                    <p style={{ color: "#b0b0b0", marginBottom: "20px", lineHeight: "1.7" }}>
                                        {service.description}
                                    </p>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {service.features.map((feature, fidx) => (
                                            <li
                                                key={fidx}
                                                style={{
                                                    color: "#888",
                                                    padding: "8px 0",
                                                    borderTop: fidx === 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                                                    fontSize: "0.9rem",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px"
                                                }}
                                            >
                                                <span style={{ color: "#D4A017" }}>✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section style={{ padding: "100px 20px", background: "#121212" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p style={{ color: "#D4A017", fontWeight: "600", letterSpacing: "2px", marginBottom: "15px" }}>
                            HOW IT WORKS
                        </p>
                        <h2 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}>
                            Our Process
                        </h2>
                        <p style={{ color: "#b0b0b0", maxWidth: "500px", margin: "0 auto" }}>
                            We make getting custom signage simple and hassle-free.
                        </p>
                    </div>

                    <div className="row g-4">
                        {process.map((item, idx) => (
                            <div key={idx} className="col-sm-6 col-lg-3 fade-in">
                                <div style={{ textAlign: "center", padding: "20px" }}>
                                    <div
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            background: "rgba(212, 160, 23, 0.1)",
                                            border: "2px solid #D4A017",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "0 auto 25px",
                                            fontSize: "1.5rem",
                                            fontWeight: "700",
                                            color: "#D4A017"
                                        }}
                                    >
                                        {item.step}
                                    </div>
                                    <h4 style={{ color: "#fff", fontWeight: "600", marginBottom: "15px" }}>
                                        {item.title}
                                    </h4>
                                    <p style={{ color: "#b0b0b0", margin: 0, lineHeight: "1.7" }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: "100px 20px" }}>
                <div className="container">
                    <div
                        style={{
                            background: "linear-gradient(135deg, #1a1a1a 0%, #242424 100%)",
                            border: "1px solid rgba(212, 160, 23, 0.3)",
                            borderRadius: "20px",
                            padding: "60px 40px",
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden"
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "-50%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "600px",
                                height: "600px",
                                background: "radial-gradient(circle, rgba(212, 160, 23, 0.1) 0%, transparent 70%)",
                                borderRadius: "50%"
                            }}
                        />
                        <div style={{ position: "relative", zIndex: 1 }}>
                            <h2 style={{ color: "#fff", fontSize: "2.2rem", fontWeight: "700", marginBottom: "20px" }}>
                                Need a Custom Sign?
                            </h2>
                            <p style={{ color: "#b0b0b0", maxWidth: "500px", margin: "0 auto 30px", fontSize: "1.1rem" }}>
                                Don't see exactly what you're looking for? We create custom solutions for unique signage needs.
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <Link
                                    to="/quote"
                                    style={{
                                        background: "linear-gradient(135deg, #D4A017 0%, #b8860b 100%)",
                                        color: "#000",
                                        padding: "16px 40px",
                                        borderRadius: "8px",
                                        fontWeight: "700",
                                        textDecoration: "none",
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
                                    Get a Free Quote
                                </Link>
                                <Link
                                    to="/gallery"
                                    style={{
                                        background: "transparent",
                                        color: "#D4A017",
                                        padding: "16px 40px",
                                        borderRadius: "8px",
                                        fontWeight: "600",
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;