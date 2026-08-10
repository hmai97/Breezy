import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import PricingCards from "../components/PricingCards";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Pricing({ showToast }) {
    // Use the useLocation hook to get the current URL hash
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [hash]);

    return (
        <>
            <Header />
            <main className="pricing-page">
                <PricingCards showToast={showToast} />
                <Stats />
                <Testimonials />
            </main>
            <Footer />
        </>
    );
}

export default Pricing;