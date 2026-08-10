import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Testimonials() {
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
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-label">Testimonials</div>
        <div className="section-title" style={{ color: "#fff" }}>
          Don't take our word for it
        </div>
        <p className="section-sub">
          Real reviews from real breathers. Probably.
        </p>
        <div className="test-grid">
          <div className="test-card">
            <div className="stars">★★★★★</div>
            <blockquote>
              "I've been breathing for 34 years and never knew I was doing
              it wrong. Breezy changed everything. My left nostril has never
              been more optimized."
            </blockquote>
            <div className="test-author">
              <div  className="test-avatar" style={{ background: "#fcd34d" }}  >
                🧑
              </div>
              <div>
                <strong>Jordan P.</strong>
                <span>VP of Inhaling, Lungify</span>
              </div>
            </div>
          </div>

          <div className="test-card">
            <div className="stars">★★★★★</div>
            <blockquote>
              "We switched our entire office to Breezy Enterprise.
              Productivity is the same but morale is confusingly higher.
              10/10 would subscribe to air again."
            </blockquote>
            <div className="test-author">
              <div  className="test-avatar" style={{ background: "#c4b5fd" }} >
                👩
              </div>
              <div>
                <strong>Sam K.</strong>
                <span>COO, NostrilTech</span>
              </div>
            </div>
          </div>

          <div className="test-card">
            <div className="stars">★★★★☆</div>
            <blockquote>
              "Four stars because I briefly forgot to breathe and it wasn't
              covered under the warranty. Otherwise, flawless product. The
              Mountain Blend slaps."
            </blockquote>
            <div className="test-author">
              <div className="test-avatar"  style={{ background: "#86efac" }}  >
                🧔
              </div>
              <div>
                <strong>Taylor R.</strong>
                <span>Professional Breather</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;