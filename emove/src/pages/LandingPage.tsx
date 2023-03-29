import React from "react";
import Home from "../components/Body";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export default LandingPage;