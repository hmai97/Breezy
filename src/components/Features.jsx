function Features() {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-label">Why Breezy</div>

                <div className="section-title">
                    Air, but make it ✨ premium ✨
                </div>

                <p className="section-sub">
                    We ruined a perfectly free resource by adding a subscription model.
                    You're welcome.
                </p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: "#dbeafe" }}>
                            🏔️
                        </div>
                        <h3>Mountain-Sourced™</h3>
                        <p>
                            Each batch is harvested at peak altitude by our trained Air
                            Sommeliers using proprietary glass jars.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: "#fce7f3" }}>
                            🧬
                        </div>
                        <h3>DNA-Matched Blends</h3>
                        <p>
                            Our AI analyzes your 23andMe data to craft a bespoke
                            nitrogen-oxygen ratio. Patent pending.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: "#d1fae5" }}>
                            🌿
                        </div>
                        <h3>Carbon-Neutral Carbon</h3>
                        <p>
                            We offset our CO₂ by thinking really hard about trees. It's
                            basically the same thing.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: "#fef3c7" }}>
                            ⚡
                        </div>
                        <h3>Instant Delivery</h3>
                        <p>
                            Our patented "Open a Window" technology ensures same-second
                            delivery anywhere on Earth.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: "#ede9fe" }} >
                            🔬
                        </div>
                        <h3>Lab-Verified Purity</h3>
                        <p>
                            Every batch is tested by scientists who definitely exist and
                            are not just our intern in a lab coat.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon" style={{ background: "#ffe4e6" }}>
                            🤝
                        </div>
                        <h3>Community Breathing</h3>
                        <p>
                            Join our Discord of 50k+ breathers. Share tips, techniques,
                            and which nostril you prefer.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Features;