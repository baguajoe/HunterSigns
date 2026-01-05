import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import LandingPage from "./pages/LandingPage";
import { Demo } from "./pages/demo";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import Navbar from "./component/Navbar";
import { Footer } from "./component/footer";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<LandingPage />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<AboutUs />} path="/about-us" />
                        <Route element={<Services />} path="/services" />
                        <Route element={<Gallery />} path="/gallery" />
                        <Route element={<Contact />} path="/contact" />
                        <Route element={<Quote />} path="/quote" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route 
                            element={
                                <div style={{ 
                                    minHeight: "60vh", 
                                    display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    color: "#fff"
                                }}>
                                    <h1 style={{ fontSize: "6rem", color: "#D4A017", marginBottom: "20px" }}>404</h1>
                                    <p style={{ color: "#b0b0b0" }}>Page not found</p>
                                </div>
                            } 
                            path="*" 
                        />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);