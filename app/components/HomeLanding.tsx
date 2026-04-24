"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./homeLanding.module.css";
import {
  CONTACT,
  heroSlides,
  serviceAreas,
  services,
  testimonials,
} from "./homeLanding.data";

type SubmitStatus = "idle" | "sending" | "success";

function formDataToRecord(formData: FormData): Record<string, FormDataEntryValue> {
  const data: Record<string, FormDataEntryValue> = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  return data;
}

export default function HomeLanding() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const closeMobileMenu = () => setIsMobileNavOpen(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("sending");
    setSubmitError("");

    try {
      const formData = new FormData(event.currentTarget);
      const data = formDataToRecord(formData);

      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, page_slug: "" }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      setSubmitStatus("success");
    } catch {
      setSubmitStatus("idle");
      setSubmitError(
        `Something went wrong. Please call us at ${CONTACT.phoneDisplay}.`,
      );
    }
  };

  return (
    <div className={styles.page}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Open+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <header className="topbar">
        <div className="logo-area">
          <a href="#home" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://wnculxpphnditrymgpzv.supabase.co/storage/v1/object/public/page-assets/aee4a4e2-d2b4-466f-92f1-0cf4fd74e9f7/0a84a4a5-0450-4643-992b-82531adff889/1776683788571-WhatsApp-Image-2026-04-20-at-16-46-04.jpg"
              alt="Diesel Performance - Truck Repair Specialists"
              style={{
                height: "56px",
                maxWidth: "180px",
                width: "auto",
                objectFit: "contain",
                display: "block",
                borderRadius: "4px",
                border: "1px solid rgba(224,21,21,0.45)",
                boxShadow:
                  "0 0 18px rgba(224,21,21,0.5),0 0 6px rgba(224,21,21,0.25),inset 0 0 8px rgba(0,0,0,0.3)",
                filter:
                  "drop-shadow(0 0 8px rgba(224,21,21,0.6)) contrast(1.05) brightness(1.02)",
                background: "#000",
                padding: "3px",
              }}
            />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#testimonials">Reviews</a>
          </li>
          <li>
            <a href={CONTACT.phoneHref} className="nav-cta">
              <i className="fa fa-phone" style={{ marginRight: "6px" }} />
              {CONTACT.phoneDisplayCompact}
            </a>
          </li>
        </ul>
        <button
          className="hamburger"
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`} id="mobileNav">
        <ul>
          <li>
            <a href="#about" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMobileMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={closeMobileMenu}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={closeMobileMenu}>
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
          <li>
            <a href={CONTACT.phoneHref}>
              <i className="fa fa-phone" style={{ marginRight: "8px" }} />
              {CONTACT.phoneDisplay}
            </a>
          </li>
        </ul>
      </nav>

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
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="hero-scroll">Scroll Down</div>
      </div>

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

      <section id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img
                src="https://wnculxpphnditrymgpzv.supabase.co/storage/v1/object/public/clone-pages/aee4a4e2-d2b4-466f-92f1-0cf4fd74e9f7/0a84a4a5-0450-4643-992b-82531adff889/0af850265b9f374b.webp"
                alt="Diesel Performance Shop"
              />
              <div className="about-badge">
                <span className="big">10+</span>
                <span className="small">
                  Years of
                  <br />
                  Experience
                </span>
              </div>
            </div>
            <div className="about-content">
              <div className="section-header">
                <div className="section-tag">About Us</div>
                <h2 className="section-title">
                  The GTA&apos;s Trusted <span>Diesel Specialists</span>
                </h2>
                <div className="divider" />
              </div>
              <p>
                Diesel Performance has served truck owners, operators and fleets
                across the GTA and surrounding areas with expert truck repair,
                maintenance and diagnostic services for over a decade. Founded by
                Harsh Verma, we&apos;ve built a reputation on honesty, precision and
                respect for your time.
              </p>
              <p>
                From routine oil services to complex engine inframes and DEF/SCR
                systems, we specialise in Volvo, Mack, Peterbilt, Kenworth and
                Freightliner trucks - both new and old - and our quick turnaround
                time has made us the go-to shop for drivers across Mississauga.
              </p>
              <div className="about-stats">
                <div className="stat-box">
                  <div className="num">10+</div>
                  <div className="lbl">Years Experience</div>
                </div>
                <div className="stat-box">
                  <div className="num">500+</div>
                  <div className="lbl">Trucks Repaired</div>
                </div>
                <div className="stat-box">
                  <div className="num">5★</div>
                  <div className="lbl">Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">
              Our <span>Services</span>
            </h2>
            <p className="section-sub">
              Comprehensive commercial truck repair and maintenance - everything
              your fleet needs under one roof.
            </p>
            <div className="divider" />
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-icon">
                  <i className={`fa ${service.icon}`} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why">
        <div className="section-inner">
          <div className="why-grid">
            <div className="why-img">
              <img
                src="https://wnculxpphnditrymgpzv.supabase.co/storage/v1/object/public/clone-pages/aee4a4e2-d2b4-466f-92f1-0cf4fd74e9f7/0a84a4a5-0450-4643-992b-82531adff889/da38e4f3482ec6eb.webp"
                alt="Why Choose Diesel Performance"
              />
              <div className="why-img-overlay">
                <div className="rating">5.0</div>
                <div className="stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="rev-count">Google Reviews</div>
              </div>
            </div>
            <div>
              <div className="section-header" style={{ textAlign: "left" }}>
                <div className="section-tag">Why Choose Us</div>
                <h2 className="section-title">
                  The <span>Diesel Performance</span> Difference
                </h2>
                <div className="divider" style={{ margin: "20px 0 0" }} />
              </div>
              <ul className="why-list">
                <li>
                  <div className="why-check">
                    <i className="fa fa-check" />
                  </div>
                  <div className="why-list-text">
                    <strong>
                      Diesel Truck Specialists or Multi-Brand Diesel Specialists
                    </strong>
                    <span>
                      Deep expertise in the brands fleets rely on most across
                      Ontario.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="why-check">
                    <i className="fa fa-check" />
                  </div>
                  <div className="why-list-text">
                    <strong>Fast Turnaround Time</strong>
                    <span>
                      We know downtime costs money. We work efficiently so you can
                      get back on the road.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="why-check">
                    <i className="fa fa-check" />
                  </div>
                  <div className="why-list-text">
                    <strong>Transparent Pricing</strong>
                    <span>
                      No hidden costs, no dealer markups. You always know exactly
                      what you&apos;re paying for.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="why-check">
                    <i className="fa fa-check" />
                  </div>
                  <div className="why-list-text">
                    <strong>Owner-Operated Quality</strong>
                    <span>
                      Harsh Verma personally oversees every repair - your truck is
                      never just a number.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="why-check">
                    <i className="fa fa-check" />
                  </div>
                  <div className="why-list-text">
                    <strong>Fleet &amp; Owner-Operator Friendly</strong>
                    <span>
                      From single rigs to large fleets, we tailor service packages
                      to fit your operation.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Our Work</div>
            <h2 className="section-title">
              Shop <span>Gallery</span>
            </h2>
            <p className="section-sub">
              A look inside our facility and the trucks we service every day.
            </p>
            <div className="divider" />
          </div>
          <div className="gallery-grid">
            {heroSlides.map((image, index) => (
              <div
                key={image}
                className={`gallery-item ${index === 0 ? "tall" : ""}`}
              >
                <img
                  src={image}
                  alt="Diesel shop work"
                  style={index === 0 ? { height: "100%", minHeight: "420px" } : { height: "200px" }}
                />
                <div className="gallery-overlay">
                  <i className="fa fa-magnifying-glass-plus" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Client Reviews</div>
            <h2 className="section-title">
              What Our <span>Customers Say</span>
            </h2>
            <p className="section-sub">
              Real words from the drivers and fleet owners who trust us with
              their trucks.
            </p>
            <div className="divider" />
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="testi-card">
                <div className="testi-quote">&quot;</div>
                <div className="testi-stars">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <p className="testi-text">{testimonial.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{testimonial.avatar}</div>
                  <div className="testi-name">
                    <strong>{testimonial.name}</strong>
                    <span>Verified Google Review</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-strip">
        <h2>Ready to Get Your Truck Back on the Road?</h2>
        <a className="cta-phone" href={CONTACT.phoneHref}>
          <i className="fa fa-phone" />
          {CONTACT.phoneDisplay}
        </a>
        <p>
          Call now or send us a message - fast response, honest estimates,
          quality work.
        </p>
        <a href="#contact" className="btn-white">
          Get a Free Quote
        </a>
      </div>

      <section id="contact">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title">
              Contact <span>Us</span>
            </h2>
            <p className="section-sub">
              Visit our shop or send us a message - we&apos;ll get back to you
              fast.
            </p>
            <div className="divider" />
          </div>
          <div className="contact-grid">
            <div className="contact-info-block">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fa fa-phone" />
                </div>
                <div>
                  <strong>Phone</strong>
                  <span>
                    <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
                  </span>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fa fa-envelope" />
                </div>
                <div>
                  <strong>Email</strong>
                  <span>
                    <a href={`mailto:${CONTACT.emailPrimary}`}>
                      {CONTACT.emailPrimary}
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fa fa-location-dot" />
                </div>
                <div>
                  <strong>Location</strong>
                  <span>Mississauga, ON</span>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fa fa-clock" />
                </div>
                <div>
                  <strong>Hours</strong>
                  <span>
                    Mon-Fri: 8:00am - 6:00pm
                    <br />
                    Sat: 9:00am - 3:00pm
                  </span>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fab fa-whatsapp" />
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>
                    <a
                      href={CONTACT.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {CONTACT.phoneDisplay} - Chat Now
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fa fa-map-location-dot" />
                </div>
                <div>
                  <strong>Directions</strong>
                  <span>
                    <a
                      href="https://www.google.com/maps/search/5890+Shawson+Dr+Mississauga+ON"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions on Google Maps&nbsp;
                      <i
                        className="fa fa-arrow-up-right-from-square"
                        style={{ fontSize: "0.8rem" }}
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-form-wrap">
              <h3>Send Us a Message</h3>
              {submitStatus === "success" ? (
                <div className="success-message">
                  <h3>Message Received!</h3>
                  <p>
                    Thank you for reaching out. Harsh and the team will get back
                    to you shortly.
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={onSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="Harsh"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        id="last_name"
                        type="text"
                        name="last_name"
                        placeholder="Verma"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" name="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" name="service">
                      <option value="">Select a service...</option>
                      <option>Brake System Repair</option>
                      <option>Oil Service</option>
                      <option>Computer Diagnostics</option>
                      <option>Transmission Repair</option>
                      <option>Engine Inframe</option>
                      <option>DEF / SCR System</option>
                      <option>Routine Maintenance</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" />
                  </div>
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={submitStatus === "sending"}
                  >
                    {submitStatus === "sending"
                      ? "Sending..."
                      : "Send Message \u00A0"}
                    {submitStatus !== "sending" ? (
                      <i className="fa fa-paper-plane" />
                    ) : null}
                  </button>
                </form>
              )}
              {submitError ? <p className="error-message">{submitError}</p> : null}
            </div>
          </div>
        </div>
      </section>

      <section id="service-areas">
        <div className="section-inner">
          <div className="section-header">
            <div className="section-tag">Where We Serve</div>
            <h2 className="section-title">
              Service <span>Areas</span>
            </h2>
            <p className="section-sub">
              Proudly serving truck owners and commercial fleets across the GTA.
            </p>
            <div className="divider" />
          </div>
          <div className="areas-grid">
            {serviceAreas.map((area) => (
              <div key={area} className="area-pill">
                <i className="fa fa-location-dot" />
                <span>{area}</span>
              </div>
            ))}
          </div>
          <p className="areas-note">
            Based in <span>Mississauga, ON</span> - serving the GTA and
            surrounding regions. Can&apos;t come to us? Call and we&apos;ll discuss
            on-site options for fleet operators.
          </p>
        </div>
      </section>

      <div className="footer-bar">
        <div className="footer-bar-inner">
          <div className="footer-copy">
            &copy; 2026 <span>Diesel Performance</span>. All rights reserved. |
            Mississauga ON |{" "}
            <a href={CONTACT.phoneHref} style={{ color: "var(--text-muted)" }}>
              {CONTACT.phoneDisplay}
            </a>
          </div>
          <div className="footer-socials">
            <a
              href="https://www.google.com/maps/search/Diesel+Performance+Mississauga+ON"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Maps"
            >
              <i className="fab fa-google" />
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <i className="fab fa-whatsapp" />
            </a>
            <a href={CONTACT.phoneHref} title="Call Us">
              <i className="fa fa-phone" />
            </a>
            <a href={`mailto:${CONTACT.emailSecondary}`} title="Email Us">
              <i className="fa fa-envelope" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
