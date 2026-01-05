import React, { useState, useEffect } from "react";

// Truck Images
import truck1 from "../../img/trucking/Trucks~~element160.jpg";
import truck2 from "../../img/trucking/Trucks~~element163.jpg";
import truck3 from "../../img/trucking/Trucks~~element146.jpg";
import truck4 from "../../img/trucking/Trucks~~element63.jpg";
import truck5 from "../../img/trucking/Trucks~~element159.jpg";
import truck6 from "../../img/trucking/Trucks~~element170.jpg";
import truck7 from "../../img/trucking/Trucks~~element59.jpg";
import truck8 from "../../img/trucking/Trucks~~element60.jpg";
import truck9 from "../../img/trucking/Trucks~~element161.jpg";
import truck10 from "../../img/trucking/Trucks~~element162.jpg";
import truck11 from "../../img/trucking/Trucks~~element169.jpg";
import truck12 from "../../img/trucking/Trucks~~element168.jpg";
import truck13 from "../../img/trucking/Trucks~~element157.jpg";
import truck14 from "../../img/trucking/Trucks~~element165.jpg";
import truck15 from "../../img/trucking/Trucks~~element166.jpg";
import truck16 from "../../img/trucking/Trucks~~element167.jpg";
import truck17 from "../../img/trucking/Trucks~~element132.jpg";
import truck18 from "../../img/trucking/Trucks~~element155.jpg";

// Banner Images
import banner1 from "../../img/banner/banner_mcdc_op_778x583.jpg";
import banner2 from "../../img/banner/banner_liberty.jpg";
import banner3 from "../../img/banner/banner_key_op_778x583.jpg";
import banner4 from "../../img/banner/banner_dorchester_bay_op_778x583.jpg";
import banner5 from "../../img/banner/banner_op_778x583.jpg";

// Awning Images
import awning1 from "../../img/awnings/Awnings~~element111.jpg";
import awning2 from "../../img/awnings/20171003_071900.jpg";
import awning3 from "../../img/awnings/20170504_175332.jpg";
import awning4 from "../../img/awnings/Awnings~~element45.jpg";
import awning5 from "../../img/awnings/storefront-_dedham_square_coffeehouse_2.jpg";
import awning6 from "../../img/awnings/Awnings~~element44.jpg";
import awning7 from "../../img/awnings/20171005_071207.jpg";

// Letter Images
import letter1 from "../../img/metal and plastic letters/metal_letters_on_brickr_op_778x583.jpg";
import letter2 from "../../img/metal and plastic letters/DCP03234.jpg";
import letter3 from "../../img/metal and plastic letters/viva_skin_care_letters_op_778x583.jpg";
import letter4 from "../../img/metal and plastic letters/metal_letters_wood_door_op_778x583.jpg";
import letter5 from "../../img/metal and plastic letters/DCP02931_op_800x600.jpg";
import letter6 from "../../img/metal and plastic letters/DCP02423_op_800x600.jpg";

// Wooden Sign Images
import wooden1 from "../../img/woodensingns/DCP02584.jpg";
import wooden2 from "../../img/woodensingns/jimmies_blade.jpg";
import wooden3 from "../../img/woodensingns/saint_john_chrysostom_parish_wooden_sign.jpg";
import wooden4 from "../../img/woodensingns/DCP02849.jpg";

// Lighted Box Images
import lighted1 from "../../img/lightedboxes/LightedSignBoxes~~element94.jpg";
import lighted2 from "../../img/lightedboxes/LightedSignBoxes~~element90.jpg";
import lighted3 from "../../img/lightedboxes/slid-in_hinged_outdoor-mini.jpg";
import lighted4 from "../../img/lightedboxes/MessgCabColorsCollage.jpg";

// Coroplast Images
import coroplast1 from "../../img/coroplast/CoroplastSamples (3).jpg";
import coroplast2 from "../../img/coroplast/CoroplastSamples (2).jpg";
import coroplast3 from "../../img/coroplast/CoroplastSamples (1).jpg";
import coroplast4 from "../../img/coroplast/CoroplastSamples.jpg";

// Construction Images
import construction1 from "../../img/construction/Construction-Jobsite~~element86.jpg";
import construction2 from "../../img/construction/DCP02055.jpg";
import construction3 from "../../img/construction/DCP01940.jpg";
import construction4 from "../../img/construction/DCP01652.jpg";

// Storefront Images
import storefront1 from "../../img/storefront/StorefrontElement.jpg";
import storefront2 from "../../img/storefront/alumin_framed_oliva_s.jpg";
import storefront3 from "../../img/storefront/Storefront~~element128.jpg";
import storefront4 from "../../img/storefront/20180129_123950.jpg";
import storefront5 from "../../img/storefront/20180501_163150.jpg";
import storefront6 from "../../img/storefront/Storefront~~element124.jpg";
import storefront7 from "../../img/storefront/Storefront~~element123.jpg";

// Real Estate Images
import realestate1 from "../../img/realestate/18x24_a-frame3.gif";
import realestate2 from "../../img/realestate/RealEstate-Lawn~~element52.jpg";
import realestate3 from "../../img/realestate/real_estate_18x24.jpg";

const categories = [
    { id: "trucks", title: "Truck Lettering", images: [truck1, truck2, truck3, truck4, truck5, truck6, truck7, truck8, truck9, truck10, truck11, truck12, truck13, truck14, truck15, truck16, truck17, truck18] },
    { id: "banners", title: "Banners", images: [banner1, banner2, banner3, banner4, banner5] },
    { id: "awnings", title: "Awnings", images: [awning1, awning2, awning3, awning4, awning5, awning6, awning7] },
    { id: "letters", title: "Metal & Plastic Letters", images: [letter1, letter2, letter3, letter4, letter5, letter6] },
    { id: "wooden", title: "Wooden Signs", images: [wooden1, wooden2, wooden3, wooden4] },
    { id: "lighted", title: "Lighted Boxes", images: [lighted1, lighted2, lighted3, lighted4] },
    { id: "coroplast", title: "Coroplast Signs", images: [coroplast1, coroplast2, coroplast3, coroplast4] },
    { id: "construction", title: "Construction Signs", images: [construction1, construction2, construction3, construction4] },
    { id: "storefront", title: "Storefronts", images: [storefront1, storefront2, storefront3, storefront4, storefront5, storefront6, storefront7] },
    { id: "realestate", title: "Real Estate Signs", images: [realestate1, realestate2, realestate3] }
];

const Gallery = () => {
    const [activeSection, setActiveSection] = useState("trucks");
    const [lightboxImage, setLightboxImage] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = categories.map(cat => document.getElementById(cat.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(categories[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Close lightbox on ESC key
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setLightboxImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
    };

    return (
        <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
            {/* Page Header */}
            <div
                style={{
                    padding: "80px 20px 60px",
                    textAlign: "center",
                    background: "linear-gradient(135deg, #121212 0%, #0a0a0a 100%)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)"
                }}
            >
                <p style={{ color: "#D4A017", fontWeight: "600", letterSpacing: "3px", marginBottom: "15px" }}>
                    OUR PORTFOLIO
                </p>
                <h1 style={{ color: "#fff", fontSize: "3rem", fontWeight: "700", marginBottom: "15px" }}>
                    Gallery
                </h1>
                <p style={{ color: "#b0b0b0", maxWidth: "600px", margin: "0 auto" }}>
                    Browse through our collection of custom signs, vehicle wraps, and more.
                </p>
            </div>

            <div className="d-flex">
                {/* Sidebar */}
                <nav
                    className="d-none d-lg-block"
                    style={{
                        width: "250px",
                        minWidth: "250px",
                        position: "sticky",
                        top: "100px",
                        height: "calc(100vh - 120px)",
                        overflowY: "auto",
                        padding: "30px 20px",
                        background: "#121212",
                        borderRight: "1px solid rgba(255,255,255,0.05)"
                    }}
                >
                    <h5 style={{ color: "#D4A017", fontWeight: "700", marginBottom: "20px", fontSize: "0.9rem", letterSpacing: "2px" }}>
                        CATEGORIES
                    </h5>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {categories.map((cat) => (
                            <li key={cat.id} style={{ marginBottom: "5px" }}>
                                <button
                                    onClick={() => scrollToSection(cat.id)}
                                    style={{
                                        width: "100%",
                                        textAlign: "left",
                                        padding: "12px 16px",
                                        background: activeSection === cat.id ? "rgba(212, 160, 23, 0.15)" : "transparent",
                                        border: "none",
                                        borderRadius: "8px",
                                        color: activeSection === cat.id ? "#D4A017" : "#b0b0b0",
                                        fontWeight: activeSection === cat.id ? "600" : "400",
                                        fontSize: "0.95rem",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        borderLeft: activeSection === cat.id ? "3px solid #D4A017" : "3px solid transparent"
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeSection !== cat.id) {
                                            e.target.style.background = "rgba(255,255,255,0.05)";
                                            e.target.style.color = "#fff";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeSection !== cat.id) {
                                            e.target.style.background = "transparent";
                                            e.target.style.color = "#b0b0b0";
                                        }
                                    }}
                                >
                                    {cat.title}
                                    <span style={{ 
                                        float: "right", 
                                        fontSize: "0.8rem", 
                                        opacity: 0.5 
                                    }}>
                                        {cat.images.length}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Category Dropdown */}
                <div
                    className="d-lg-none"
                    style={{
                        position: "sticky",
                        top: "80px",
                        zIndex: 100,
                        width: "100%",
                        padding: "15px 20px",
                        background: "rgba(18, 18, 18, 0.95)",
                        backdropFilter: "blur(10px)",
                        borderBottom: "1px solid rgba(255,255,255,0.1)"
                    }}
                >
                    <select
                        value={activeSection}
                        onChange={(e) => scrollToSection(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "12px 16px",
                            background: "#1a1a1a",
                            border: "1px solid #D4A017",
                            borderRadius: "8px",
                            color: "#fff",
                            fontSize: "1rem",
                            cursor: "pointer"
                        }}
                    >
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.title} ({cat.images.length})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Main Gallery Content */}
                <div className="flex-grow-1" style={{ padding: "40px 30px" }}>
                    {categories.map((category) => (
                        <section key={category.id} id={category.id} style={{ marginBottom: "80px" }}>
                            <div style={{ marginBottom: "30px" }}>
                                <h2
                                    style={{
                                        color: "#fff",
                                        fontWeight: "700",
                                        fontSize: "1.75rem",
                                        marginBottom: "10px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "15px"
                                    }}
                                >
                                    {category.title}
                                    <span
                                        style={{
                                            background: "rgba(212, 160, 23, 0.2)",
                                            color: "#D4A017",
                                            padding: "4px 12px",
                                            borderRadius: "20px",
                                            fontSize: "0.85rem",
                                            fontWeight: "500"
                                        }}
                                    >
                                        {category.images.length} items
                                    </span>
                                </h2>
                                <div style={{ width: "60px", height: "3px", background: "#D4A017", borderRadius: "2px" }} />
                            </div>

                            <div className="row g-4">
                                {category.images.map((image, index) => (
                                    <div className="col-sm-6 col-md-4 col-xl-3" key={index}>
                                        <div
                                            onClick={() => setLightboxImage(image)}
                                            style={{
                                                position: "relative",
                                                borderRadius: "12px",
                                                overflow: "hidden",
                                                cursor: "pointer",
                                                background: "#1a1a1a",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                                transition: "all 0.4s ease"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = "scale(1.03)";
                                                e.currentTarget.style.borderColor = "#D4A017";
                                                e.currentTarget.style.boxShadow = "0 0 30px rgba(212, 160, 23, 0.2)";
                                                e.currentTarget.querySelector(".overlay").style.opacity = "1";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = "scale(1)";
                                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                                e.currentTarget.style.boxShadow = "none";
                                                e.currentTarget.querySelector(".overlay").style.opacity = "0";
                                            }}
                                        >
                                            <img
                                                src={image}
                                                alt={`${category.title} ${index + 1}`}
                                                style={{
                                                    width: "100%",
                                                    height: "220px",
                                                    objectFit: "cover",
                                                    display: "block"
                                                }}
                                            />
                                            <div
                                                className="overlay"
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: "rgba(0,0,0,0.5)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    opacity: 0,
                                                    transition: "opacity 0.3s ease"
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: "#D4A017",
                                                        fontSize: "2rem",
                                                        fontWeight: "300"
                                                    }}
                                                >
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    onClick={() => setLightboxImage(null)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0,0,0,0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                        padding: "20px",
                        cursor: "zoom-out"
                    }}
                >
                    <button
                        onClick={() => setLightboxImage(null)}
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "30px",
                            background: "none",
                            border: "none",
                            color: "#fff",
                            fontSize: "2.5rem",
                            cursor: "pointer",
                            transition: "color 0.3s ease"
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#D4A017"}
                        onMouseLeave={(e) => e.target.style.color = "#fff"}
                    >
                        ×
                    </button>
                    <img
                        src={lightboxImage}
                        alt="Full size"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: "90%",
                            maxHeight: "85vh",
                            borderRadius: "8px",
                            boxShadow: "0 0 60px rgba(0,0,0,0.5)",
                            cursor: "default"
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;