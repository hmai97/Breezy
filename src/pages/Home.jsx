import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Newsletter from "../components/Newsletter";
import AirPlanFinder from "../components/AirPlanFinder";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Home({ showToast }) {
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
      <Header/>
      <Hero showToast={showToast} />
      <Logos />
      <Features />
      <HowItWorks />
      <AirPlanFinder />
      <Newsletter showToast={showToast}/>
      <Footer />
    </>
  );
}

export default Home;