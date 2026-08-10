import { useState } from "react";

function Newsletter({ showToast }) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.includes("@")) {
            showToast("🎉 Welcome to Breezy! Check your inbox (or just inhale).");
            setEmail("");
        } else {
            showToast(  "⚠️ Please enter a valid email. We need it for... air reasons." );
        }
    };

    return (
        <section className="newsletter" id="signup">
            <div className="container">
                <div className="nl-box">
                    <h2>Ready to breathe different?</h2>
                    <p>
                        Join 12,847 breathers. Get weekly air quality insights and
                        exclusive nostril tips.
                    </p>
                    <form className="nl-form" onSubmit={handleSubmit}>
                        <input type="email" placeholder="you@breathe.io" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button type="submit" className="btn btn-primary"> Subscribe Free → </button>
                    </form>
                    <p style={{ fontSize: "0.75rem", color: "var(--slate-500)", marginTop: "14px" }}>No spam. Just air. Unsubscribe by holding your breath for 60 seconds.</p>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </section>
    );
}

export default Newsletter;