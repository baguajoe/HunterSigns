import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import hunterLogo from "../../img/hunter_signs_logo__new__op_800x228.jpg";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(10, 10, 10, 0.98)" : "rgba(10, 10, 10, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(212, 160, 23, 0.2)" : "1px solid rgba(255, 255, 255, 0.05)",
        padding: scrolled ? "10px 0" : "15px 0",
        transition: "all 0.3s ease"
    };

    const linkStyle = (isActive) => ({
        color: isActive ? "#D4A017" : "#ffffff",
        fontWeight: isActive ? "600" : "500",
        fontSize: "0.95rem",
        padding: "10px 18px",
        borderRadius: "8px",
        background: isActive ? "rgba(212, 160, 23, 0.1)" : "transparent",
        transition: "all 0.3s ease",
        textDecoration: "none"
    });

    const ctaStyle = {
        background: "linear-gradient(135deg, #D4A017 0%, #b8860b 100%)",
        color: "#000",
        fontWeight: "700",
        fontSize: "0.9rem",
        padding: "12px 28px",
        borderRadius: "8px",
        border: "none",
        transition: "all 0.3s ease",
        textDecoration: "none",
        display: "inline-block"
    };

    return (
        <>
            {/* Spacer for fixed navbar */}
            <div style={{ height: "80px" }}></div>
            
            <nav style={navStyle}>
                <div className="container-fluid px-4">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* Logo */}
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <img
                                src={hunterLogo}
                                alt="Hunter Signs"
                                style={{
                                    height: scrolled ? "45px" : "55px",
                                    width: "auto",
                                    transition: "all 0.3s ease"
                                }}
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="d-none d-lg-flex align-items-center gap-2">
                            <NavLink to="/" style={({ isActive }) => linkStyle(isActive)}>
                                Home
                            </NavLink>
                            <NavLink to="/about-us" style={({ isActive }) => linkStyle(isActive)}>
                                About
                            </NavLink>
                            <NavLink to="/services" style={({ isActive }) => linkStyle(isActive)}>
                                Services
                            </NavLink>
                            <NavLink to="/gallery" style={({ isActive }) => linkStyle(isActive)}>
                                Gallery
                            </NavLink>
                            <NavLink to="/contact" style={({ isActive }) => linkStyle(isActive)}>
                                Contact
                            </NavLink>
                            <Link
                                to="/quote"
                                style={ctaStyle}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "translateY(-2px)";
                                    e.target.style.boxShadow = "0 0 30px rgba(212, 160, 23, 0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = "translateY(0)";
                                    e.target.style.boxShadow = "none";
                                }}
                            >
                                Get a Quote
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="d-lg-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{
                                background: "none",
                                border: "none",
                                padding: "10px",
                                cursor: "pointer"
                            }}
                        >
                            <div style={{
                                width: "25px",
                                height: "2px",
                                background: "#D4A017",
                                marginBottom: "6px",
                                transition: "all 0.3s ease",
                                transform: menuOpen ? "rotate(45deg) translate(5px, 6px)" : "none"
                            }}></div>
                            <div style={{
                                width: "25px",
                                height: "2px",
                                background: "#D4A017",
                                marginBottom: "6px",
                                opacity: menuOpen ? 0 : 1,
                                transition: "all 0.3s ease"
                            }}></div>
                            <div style={{
                                width: "25px",
                                height: "2px",
                                background: "#D4A017",
                                transition: "all 0.3s ease",
                                transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none"
                            }}></div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className="d-lg-none"
                        style={{
                            maxHeight: menuOpen ? "500px" : "0",
                            overflow: "hidden",
                            transition: "all 0.3s ease",
                            marginTop: menuOpen ? "20px" : "0"
                        }}
                    >
                        <div className="d-flex flex-column gap-2">
                            <NavLink 
                                to="/" 
                                style={({ isActive }) => ({...linkStyle(isActive), display: "block"})}
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                            <NavLink 
                                to="/about-us" 
                                style={({ isActive }) => ({...linkStyle(isActive), display: "block"})}
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </NavLink>
                            <NavLink 
                                to="/services" 
                                style={({ isActive }) => ({...linkStyle(isActive), display: "block"})}
                                onClick={() => setMenuOpen(false)}
                            >
                                Services
                            </NavLink>
                            <NavLink 
                                to="/gallery" 
                                style={({ isActive }) => ({...linkStyle(isActive), display: "block"})}
                                onClick={() => setMenuOpen(false)}
                            >
                                Gallery
                            </NavLink>
                            <NavLink 
                                to="/contact" 
                                style={({ isActive }) => ({...linkStyle(isActive), display: "block"})}
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </NavLink>
                            <Link
                                to="/quote"
                                style={{...ctaStyle, textAlign: "center", marginTop: "10px"}}
                                onClick={() => setMenuOpen(false)}
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;