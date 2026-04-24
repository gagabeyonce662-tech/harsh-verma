import { CONTACT } from "../homeLanding.data";
import { ContactSectionProps } from "./types";

export function ContactSection({
  submitStatus,
  submitError,
  onSubmit,
}: ContactSectionProps) {
  return (
    <section id="contact">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Contact <span>Us</span>
          </h2>
          <p className="section-sub">
            Visit our shop or send us a message - we&apos;ll get back to you fast.
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
                  Thank you for reaching out. Harsh and the team will get back to
                  you shortly.
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
                  {submitStatus === "sending" ? "Sending..." : "Send Message \u00A0"}
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
  );
}
