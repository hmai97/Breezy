function Hero({ showToast }) {
  return (
    <section className="hero" id="hero">
      <div className="badge"><span></span>Now serving 47 countries </div>
        <h1>Premium <em>Artisanal Air</em>, Delivered Fresh</h1>      
      <p>
        Hand-curated atmospheric blends sourced from the world&apos;s finest altitudes.
        Because you deserve better.
      </p>
      <div className="hero-buttons">
        <button className="btn btn-primary" onClick={() => window.location.href = "#"}>
          Start Breathing Better →
        </button>

        <button className="btn btn-secondary"  onClick={() => showToast("📺 Playing: 'The Art of Nothing' (3 min)")}>
          ▶ Watch the Story
        </button>
      </div>

     <div className="social-proof">
        <div className="avatars">
            <span style={{background: '#fcd34d'}}>🧑</span>
            <span style={{background: '#a5f3fc'}}>👩</span>
            <span style={{background: '#c4b5fd'}}>🧔</span>
            <span style={{background: '#fda4af'}}>👱</span>
            <span style={{background: '#86efac'}}>👩‍🦰</span>
        </div>
        <p><strong>12,847</strong> breathers joined this month</p>
     </div>

    </section>
  );
}

export default Hero;