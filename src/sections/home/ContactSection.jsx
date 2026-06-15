import { Mail, Phone } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import useLiveValidation from "../../hooks/useLiveValidation.js";
import { saveEntry, storageKeys } from "../../storage.js";

const contactValidators = {
  name: (value) => (value.trim().length < 2 ? "Enter your full name." : ""),
  email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address."),
  interest: (value) => (value ? "" : "Select a project interest."),
  message: (value) => (value.trim().length < 15 ? "Please describe your requirement in at least 15 characters." : ""),
};

export default function ContactSection({ showToast }) {
  const form = useLiveValidation(
    {
      email: "",
      interest: "",
      message: "",
      name: "",
    },
    contactValidators,
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.isValid) {
      form.touchAll();
      showToast("Please fix the highlighted contact form fields.");
      return;
    }

    const saved = saveEntry(storageKeys.project, {
      ...form.values,
      submittedAt: new Date().toISOString(),
    });

    showToast(
      saved
        ? "Requirement saved locally. Backend email or CRM integration can be added next."
        : "Requirement received, but this browser blocked local demo storage.",
    );
    form.reset();
  };

  const fieldProps = (name) => ({
    "aria-invalid": Boolean(form.touched[name] && form.errors[name]),
    name,
    onBlur: form.handleBlur,
    onChange: form.handleChange,
    value: form.values[name],
  });

  return (
    <AnimatedSection id="contact" className="pro-section pro-contact">
      <div className="container contact-grid pro-contact-grid">
        <div>
          <p className="pro-eyebrow">Start with GravityTech</p>
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
        <form className="form-card pro-form-card" onSubmit={handleSubmit} noValidate>
          <label className={form.touched.name && form.errors.name ? "field-invalid" : ""}>
            Full name
            <input type="text" placeholder="Your name" {...fieldProps("name")} />
            {form.touched.name && form.errors.name ? <span className="field-error">{form.errors.name}</span> : null}
          </label>
          <label className={form.touched.email && form.errors.email ? "field-invalid" : ""}>
            Email address
            <input type="email" placeholder="you@example.com" {...fieldProps("email")} />
            {form.touched.email && form.errors.email ? <span className="field-error">{form.errors.email}</span> : null}
          </label>
          <label className={form.touched.interest && form.errors.interest ? "field-invalid" : ""}>
            Project interest
            <select {...fieldProps("interest")}>
              <option value="">Select a track</option>
              <option>Java Project</option>
              <option>Python Project</option>
              <option>Data Analytics Project</option>
              <option>React / Website Project</option>
              <option>Client Software Development</option>
            </select>
            {form.touched.interest && form.errors.interest ? (
              <span className="field-error">{form.errors.interest}</span>
            ) : null}
          </label>
          <label className={form.touched.message && form.errors.message ? "field-invalid" : ""}>
            Requirement
            <textarea
              rows="4"
              placeholder="Describe your project or training need"
              {...fieldProps("message")}
            />
            {form.touched.message && form.errors.message ? (
              <span className="field-error">{form.errors.message}</span>
            ) : null}
          </label>
          <button className="button pro-button" type="submit">
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
