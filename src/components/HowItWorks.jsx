import { useEffect } from "react";

function HowItWorks() {

  useEffect(() => {
    const howSection = document.querySelector("#how");
    const steps = document.querySelectorAll("#how .step");

    if (!howSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((step) => {
              step.classList.add("visible");
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(howSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="how" id="how">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="section-label">How It Works</div>

        <div className="section-title">
          Three steps to better breathing
        </div>

        <p className="section-sub" style={{ margin: "0 auto" }}>
          It's so simple, you've probably been doing it wrong your whole life.
        </p>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Take Our Quiz</h3>
            <p>
              Answer 47 deeply personal questions so we can recommend the air
              you were already breathing.
            </p>
          </div>

          <div className="step">
            <div className="step-num">2</div>
            <h3>We "Curate"</h3>
            <p>
              Our team spends 0 minutes hand-selecting the exact same air
              from our warehouse (the sky).
            </p>
          </div>

          <div className="step">
            <div className="step-num">3</div>
            <h3>Breathe &amp; Subscribe</h3>
            <p>
              Inhale, exhale, repeat. If you stop, it's not our fault but
              also please don't cancel.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;