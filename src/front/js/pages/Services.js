import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Services = () => {
    const services = [
        {
            title: "Custom Sign Design",
            description: "Personalized designs tailored to your brand or personal requirements. Consultation with our design team to bring your vision to life.",
            useCases: "Business logos, promotional signs, event banners.",
        },
        {
            title: "Large-Format Printing",
            description: "High-resolution printing for banners, posters, and trade show displays. Durable materials that are weather-resistant and fade-proof.",
            useCases: "Outdoor advertisements, indoor branding, event displays.",
        },
        {
            title: "Vehicle Wraps and Graphics",
            description: "Custom-designed wraps for cars, trucks, and fleets. Long-lasting materials with professional installation.",
            useCases: "Mobile advertising, brand promotion.",
        },
        {
            title: "LED and Illuminated Signs",
            description: "Eye-catching LED and backlit signage for businesses. Energy-efficient and customizable lighting options.",
            useCases: "Storefronts, business interiors, night-time visibility.",
        },
        {
            title: "Web Design and Development",
            description: "Complete web solutions for small businesses and enterprises. Expertise in front-end and back-end development using modern technologies.",
            useCases: "Business websites, e-commerce platforms, custom web applications.",
        },
    ];

    return (
        <div className="container my-5">
            <header className="text-center mb-4">
                <h1>Welcome to Our Services</h1>
                <p>
                    At <strong>Hunter Signs</strong>, we go beyond custom signage to offer a full suite of creative and technical solutions. In partnership with <strong>SpectraSphere</strong>, we deliver world-class web design and development services tailored to your needs.
                </p>
            </header>

            <div className="accordion" id="servicesAccordion">
                {services.map((service, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading-${index}`}>
                            <button
                                className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${index}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse-${index}`}
                            >
                                {service.title}
                            </button>
                        </h2>
                        <div
                            id={`collapse-${index}`}
                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                            aria-labelledby={`heading-${index}`}
                            data-bs-parent="#servicesAccordion"
                        >
                            <div className="accordion-body">
                                <p>{service.description}</p>
                                <p><strong>Use Cases:</strong> {service.useCases}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
