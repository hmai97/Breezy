import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Header() {
    const [moreOpen, setMoreOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeMobile = () => { setMobileOpen(false); };
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);
    return (
        <>
            {/* HEADER */}
            <div className="header-wrap">
                {/* Utility bar */}
                <div className="utility-bar">
                    <a href="#"><span className="util-icon">📱</span> Breezy App </a>
                    <a href="#"> <span className="util-icon">📅</span> Consultations  </a>
                    <a href="#"> <span className="util-icon">📞</span> 1-888-AIR-GOOD  </a>
                </div>

                {/* Mid bar: logo + secondary links */}
                <div className="mid-bar">
                    <Link to="/" className="nav-brand" style={{ textDecoration: "none" }}> <em>Breezy</em>&thinsp;™</Link>
                    <div className="mid-links">
                        <a href="#">Locations <span style={{ fontSize: "0.6rem" }}>▾</span> </a>
                        <a href="#">Rewards Club</a>
                        <a href="#signup" className="book-btn">  Book Air <span style={{ fontSize: "0.6rem" }}>▾</span></a>
                    </div>

                    <button className={`hamburger ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(!mobileOpen)}   >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                
                {/* Main nav */}
                <div className="main-nav">
                    <div className="location-badge">
                        <div className="location-dot">📍</div>
                        SUMMIT
                    </div>

                    <div className="main-nav-links">
                        <a href="/#features">Features</a>
                        <a href="/#how">How It Works</a>
                        <Link to="/pricing">Pricing</Link>
                        <a href="/pricing#testimonials">Reviews</a>
                        <a href="#">Promotions</a>
                    </div>

                    <div className="more-wrap">
                        <button className={`more-btn ${moreOpen ? "open" : ""}`} onClick={() => setMoreOpen(!moreOpen)}>
                            More <span className="more-arrow">▼</span>
                        </button>

                        <div className={`more-dropdown ${moreOpen ? "open" : ""}`}>
                            <Link to="/faq">FAQ</Link>
                            <a href="#">Air Menu</a>
                            <a href="#">Careers</a>
                            <a href="#">Directions</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* MOBILE MENU OVERLAY */}
            <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
                <a href="/#features" onClick={closeMobile}>Features</a>
                <a href="/#how" onClick={closeMobile}>How It Works</a>
                <Link to="/pricing" onClick={closeMobile}>Pricing</Link>
                <a href="/#testimonials" onClick={closeMobile}>Reviews</a>
                <a href="#" onClick={closeMobile}>Promotions</a>
                <div className="mobile-divider"></div>
                <Link to="/faq" onClick={closeMobile}>FAQ</Link>
                <a href="#" onClick={closeMobile}>Air Menu</a>
                <a href="#" onClick={closeMobile}>Careers</a>
                <a href="#" onClick={closeMobile}>Directions</a>
                <div className="mobile-divider"></div>
                <a href="#" onClick={closeMobile}>Locations</a>
                <a href="#" onClick={closeMobile}>Rewards Club</a>
                <a href="#signup" onClick={closeMobile}>Book Air</a>
            </div>
        </>
    );
}

export default Header;