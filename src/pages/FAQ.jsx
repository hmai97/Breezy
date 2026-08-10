import Header from "../components/Header";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

function FAQ() {
  return (
    <>
      <Header />
      <main>
        <section style={{ paddingBottom: "24px" }}>
          <div className="container" style={{ textAlign: "center", paddingTop: "100px" }}>
            <div className="section-label">About Breezy</div>
            <h1 className="section-title">We make air feel like an experience.</h1>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              Breezy is a playful take on premium lifestyle products, bringing together
              carefully sourced atmosphere, thoughtful delivery, and a little bit of delight.
            </p>
          </div>
        </section>
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

export default FAQ;