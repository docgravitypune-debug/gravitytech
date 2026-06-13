import { Mail, Phone } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { saveEntry, storageKeys } from "../../storage.js";

export default function ContactSection({ showToast }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const saved = saveEntry(storageKeys.project, {
      ...data,
      submittedAt: new Date().toISOString(),
    });

    showToast(
      saved
        ? "Requirement saved locally. Backend email or CRM integration can be added next."
        : "Requirement received, but this browser blocked local demo storage.",
    );
    form.reset();
  };

  return (
    <AnimatedSection id="contact" className="section section-muted">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Start with GravityTech</p>
          <h2>Tell us what you want to build.</h2>
          <p>
            Share your project requirement or learning goal. The demo form stores your request
            locally in this browser and can be connected to a backend later.
          </p>
          <div className="contact-list">
            <a href="mailto:hello@gravitytechsoftware.com">
              <Mail size={18} /> hello@gravitytechsoftware.com
            </a>
            <a href="tel:+919999999999">
              <Phone size={18} /> +91 99999 99999
            </a>
            <span>Java | Python | Data Analytics | React | Web Apps</span>
          </div>
        </div>
        <form className="form-card glass-card" onSubmit={handleSubmit}>
          <label>
            Full name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Project interest
            <select name="interest" required defaultValue="">
              <option value="">Select a track</option>
              <option>Java Project</option>
              <option>Python Project</option>
              <option>Data Analytics Project</option>
              <option>React / Website Project</option>
              <option>Client Software Development</option>
            </select>
          </label>
          <label>
            Requirement
            <textarea
              name="message"
              rows="4"
              placeholder="Describe your project or training need"
              required
            />
          </label>
          <button className="button" type="submit">
            Submit Requirement
          </button>
          <p className="form-note">
            No backend is connected yet; submissions are saved in local storage for demo review.
          </p>
        </form>
      </div>
    </AnimatedSection>
  );
}
