import React from "react";
import Home from "../components/Body";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Layout } from "../Layouts/Layout";

const LandingPage: React.FC = () => {
    return (
        <div>
            <Layout 
            useTopBottomLayout={true}
            leftContentWidth="100%"
            rightContentWidth="100%"
            leftContent={<Header />}
            rightContent={<Layout 
                leftContentWidth="100%"
                rightContentWidth="100%"
                useTopBottomLayout={true}
                leftContent={<Home />}
                rightContent={<Footer />}
            />}
            />
            {/* <Header />
            <Home />
            <Footer /> */}
        </div>
    )
}

export default LandingPage;