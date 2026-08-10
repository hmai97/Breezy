import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import PricingCards from "../components/PricingCards";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Pricing({ showToast }) {
const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
        // Remove the '#' character from the hash string
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
            setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
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