import { CONTACT, heroSlides } from "../homeLanding.data";
import { HeroSectionProps } from "./types";

export function HeroSection({ activeSlide, onDotClick }: HeroSectionProps) {
  return (
    <div className="hero" id="home">
      <div className="hero-slides">
        {heroSlides.map((image, index) => (
          <div
            key={image}
            className={`hero-slide ${activeSlide === index ? "active" : ""}`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>
      <div className="hero-overlay">
        <div className="hero-tag">Mississauga, Ontario</div>
        <h1>
          Dealership Quality.
          <br />
          <span>Without the</span>
          <br />
          Dealership Prices.
        </h1>
        <p>
          Expert diesel truck repair, diagnostics and maintenance for Volvo,
          Mack, Peterbilt, Kenworth, Freightliner and all commercial fleets.
          Fast turnaround. No shortcuts.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">
            Book a Service &nbsp;<i className="fa fa-arrow-right" />
          </a>
          <a href={CONTACT.phoneHref} className="btn-secondary">
            <i className="fa fa-phone" style={{ marginRight: "8px" }} />
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="hero-dots" id="heroDots">
        {heroSlides.map((image, index) => (
          <button
            key={image}
            className={`hero-dot ${activeSlide === index ? "active" : ""}`}
            type="button"
            onClick={() => onDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="hero-scroll">Scroll Down</div>
    </div>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-inner">
        <div className="trust-item">
          <i className="fa fa-wrench" />
          <div className="trust-text">
            <strong>Full-Service Shop</strong>
            <span>Repairs, diagnostics and maintenance</span>
          </div>
        </div>
        <div className="trust-item">
          <i className="fa fa-clock" />
          <div className="trust-text">
            <strong>Fast Turnaround</strong>
            <span>Back on the road ASAP</span>
          </div>
        </div>
        <div className="trust-item">
          <i className="fa fa-shield-halved" />
          <div className="trust-text">
            <strong>Quality Guaranteed</strong>
            <span>Workmanship you can trust</span>
          </div>
        </div>
        <div className="trust-item">
          <i className="fa fa-star" />
          <div className="trust-text">
            <strong>5-Star Rated</strong>
            <span>Trusted by GTA fleets</span>
          </div>
        </div>
      </div>
    </div>
  );
}
