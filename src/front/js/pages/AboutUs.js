import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
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

    const values = [
        {
            icon: "🎯",
            title: "Quality First",
            description: "We use only premium materials and proven techniques to ensure your signs last for years to come."
        },
        {
            icon: "🤝",
            title: "Customer Focus",
            description: "Your satisfaction is our priority. We work closely with you from concept to installation."
        },
        {
            icon: "⚡",
            title: "Fast Turnaround",
            description: "We understand deadlines matter. Our efficient process delivers quality signs on schedule."
        },
        {
            icon: "💡",
            title: "Creative Solutions",
            description: "Every business is unique. We create custom signage that reflects your brand personality."
        }
    ];

    const milestones = [
        { year: "1990s", title: "Founded", description: "Hunter Signs was established in Boston's Dorchester neighborhood." },
        { year: "2000s", title: "Expansion", description: "Grew our services to include vehicle wraps and digital printing." },
        { year: "2010s", title: "Innovation", description: "Adopted LED technology and expanded our production facility." },
        { year: "Today", title: "Leading the Way", description: "Serving businesses across Massachusetts with cutting-edge signage solutions." }
    ];

    return (
        <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
            {/* Hero Section */}
            <section
                style={{
                    padding: "100px 20px 80px",
                    background: "linear-gradient(135deg, #121212 0%, #0a0a0a 100%)",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-30%",
                        left: "-20%",
                        width: "600px",
                        height: "600px",
                        background: "radial-gradient(circle, rgba(212, 160, 23, 0.1) 0%, transparent 70%)",
                        borderRadius: "50%"
                    }}
                />
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-8 mx-auto text-center">
                            <p style={{ color: "#D4A017", fontWeight: "600", letterSpacing: "3px", marginBottom: "15px" }}>
                                ABOUT US
                            </p>
                            <h1 style={{ color: "#fff", fontSize: "3rem", fontWeight: "700", marginBottom: "25px" }}>
                                Boston's Trusted Sign Company Since <span style={{ color: "#D4A017" }}>1990</span>
                            </h1>
                            <p style={{ color: "#b0b0b0", fontSize: "1.2rem", lineHeight: "1.8", maxWidth: "700px", margin: "0 auto" }}>
                                For over three decades, Hunter Signs has been helping businesses stand out 
                                with custom signage solutions. From our shop in Dorchester, we've built a 
                                reputation for quality craftsmanship and exceptional customer service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section style={{ padding: "100px 20px" }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 fade-in">
                            <p style={{ color: "#D4A017", fontWeight: "600", letterSpacing: "2px", marginBottom: "15px" }}>
                                OUR STORY
                            </p>
                            <h2 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: "700", marginBottom: "25px" }}>
                                Built on Craftsmanship & Community
                            </h2>
                            <p style={{ color: "#b0b0b0", lineHeight: "1.8", marginBottom: "20px" }}>
                                Hunter Signs started with a simple mission: help local businesses get noticed. 
                                What began as a small sign shop has grown into a full-service signage company, 
                                but our commitment to quality and personal service has never changed.
                            </p>
                            <p style={{ color: "#b0b0b0", lineHeight: "1.8", marginBottom: "30px" }}>
                                We've created thousands of signs over the years – from simple vinyl lettering 
                                to elaborate vehicle wraps and illuminated storefronts. Each project gets the 
                                same attention to detail because we know your sign represents your business.
                            </p>
                            <Link
                                to="/quote"
                                style={{
                                    background: "linear-gradient(135deg, #D4A017 0%, #b8860b 100%)",
                                    color: "#000",
                                    padding: "14px 32px",
                                    borderRadius: "8px",
                                    fontWeight: "700",
                                    textDecoration: "none",
                                    display: "inline-block",
                                    transition: "all 0.3s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "translateY(-3px)";
                                    e.target.style.boxShadow = "0 0 30px rgba(212, 160, 23, 0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = "translateY(0)";
                                    e.target.style.boxShadow = "none";
                                }}
                            >
                                Work With Us
                            </Link>
                        </div>
                        <div className="col-lg-6 fade-in">
                            <div
                                style={{
                                    background: "#1a1a1a",
                                    borderRadius: "20px",
                                    padding: "50px 40px",
                                    border: "1px solid rgba(255,255,255,0.1)"
                                }}
                            >
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "30px" }}>
                                    {[
                                        { number: "30+", label: "Years in Business" },
                                        { number: "5000+", label: "Signs Created" },
                                        { number: "500+", label: "Happy Clients" },
                                        { number: "100%", label: "Local Business" }
                                    ].map((stat, idx) => (
                                        <div key={idx} style={{ textAlign: "center" }}>
                                            <div
                                                style={{
                                                    fontSize: "2.5rem",
                                                    fontWeight: "800",
                                                    color: "#D4A017",
                                                    marginBottom: "5px"
                                                }}
                                            >
                                                {stat.number}
                                            </div>
                                            <div style={{ color: "#b0b0b0", fontSize: "0.95rem" }}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section style={{ padding: "100px 20px", background: "#121212" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p style={{ color: "#D4A017", fontWeight: "600", letterSpacing: "2px", marginBottom: "15px" }}>
                            WHAT DRIVES US
                        </p>
                        <h2 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}>
                            Our Values
                        </h2>
                    </div>

                    <div className="row g-4">
                        {values.map((value, idx) => (
                            <div key={idx} className="col-md-6 col-lg-3 fade-in">
                                <div
                                    style={{
                                        background: "#1a1a1a",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "16px",
                                        padding: "35px 25px",
                                        height: "100%",
                                        textAlign: "center",
                                        transition: "all 0.4s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-10px)";
                                        e.currentTarget.style.borderColor = "#D4A017";
                                        e.currentTarget.style.boxShadow = "0 20px 40px rgba(212, 160, 23, 0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
                                        {value.icon}
                                    </div>
                                    <h4 style={{ color: "#fff", fontWeight: "600", marginBottom: "15px" }}>
                                        {value.title}
                                    </h4>
                                    <p style={{ color: "#b0b0b0", margin: 0, lineHeight: "1.7" }}>
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section style={{ padding: "100px 20px" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <p style={{ color: "#D4A017", fontWeight: "600", letterSpacing: "2px", marginBottom: "15px" }}>
                            OUR JOURNEY
                        </p>
                        <h2 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: "700" }}>
                            Milestones
                        </h2>
                    </div>

                    <div className="row">
                        {milestones.map((milestone, idx) => (
                            <div key={idx} className="col-md-6 col-lg-3 mb-4 fade-in">
                                <div
                                    style={{
                                        borderLeft: "3px solid #D4A017",
                                        paddingLeft: "25px",
                                        height: "100%"
                                    }}
                                >
                                    <div
                                        style={{
                                            color: "#D4A017",
                                            fontWeight: "700",
                                            fontSize: "1.1rem",
                                            marginBottom: "10px"
                                        }}
                                    >
                                        {milestone.year}
                                    </div>
                                    <h4 style={{ color: "#fff", fontWeight: "600", marginBottom: "10px" }}>
                                        {milestone.title}
                                    </h4>
                                    <p style={{ color: "#b0b0b0", margin: 0, lineHeight: "1.7" }}>
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: "100px 20px", background: "#121212" }}>
                <div className="container text-center">
                    <h2 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}>
                        Ready to Get Started?
                    </h2>
                    <p style={{ color: "#b0b0b0", maxWidth: "500px", margin: "0 auto 35px", fontSize: "1.1rem" }}>
                        Let's discuss your signage needs and bring your vision to life.
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
                            Get a Quote
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
            </section>
        </div>
    );
};

export default AboutUs;