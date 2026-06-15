import { useEffect } from "react";
import { UploadCloud } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import useLiveValidation from "../../hooks/useLiveValidation.js";
import { formatDate } from "../../utils/format.js";

const maxResumeSize = 5 * 1024 * 1024;

const applicationValidators = {
  email: (value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address."),
  experience: (value) => (value ? "" : "Select your experience level."),
  message: (value) => (value.trim().length < 20 ? "Tell us your goal in at least 20 characters." : ""),
  name: (value) => (value.trim().length < 2 ? "Enter your full name." : ""),
  phone: (value) => (/^[+\d][\d\s-]{7,}$/.test(value.trim()) ? "" : "Enter a valid phone number."),
  resume: (file) => {
    if (!file) {
      return "Upload your resume.";
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const allowedExtension = /\.(pdf|doc|docx)$/i.test(file.name);

    if (!allowedTypes.includes(file.type) && !allowedExtension) {
      return "Upload a PDF, DOC, or DOCX file.";
    }

    if (file.size > maxResumeSize) {
      return "Resume must be under 5 MB.";
    }

    return "";
  },
  track: (value) => (value ? "" : "Select your preferred track."),
};

export default function ApplicationSection({ applications, onSubmit, selectedTrack, setSelectedTrack }) {
  const form = useLiveValidation(
    {
      email: "",
      experience: "",
      message: "",
      name: "",
      phone: "",
      resume: null,
      track: selectedTrack,
    },
    applicationValidators,
  );

  useEffect(() => {
    if (selectedTrack && form.values.track !== selectedTrack) {
      form.setFieldValue("track", selectedTrack);
    }
  }, [form.values.track, selectedTrack]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.isValid) {
      form.touchAll();
      return;
    }

    onSubmit(form.values);
    form.reset();
  };

  const fieldProps = (name) => ({
    "aria-invalid": Boolean(form.touched[name] && form.errors[name]),
    name,
    onBlur: form.handleBlur,
    onChange: form.handleChange,
    value: form.values[name],
  });

  const selectTrack = (event) => {
    form.handleChange(event);
    setSelectedTrack(event.target.value);
  };

  return (
    <AnimatedSection id="apply" className="section section-dark application-section">
      <div className="container application-grid">
        <div>
          <p className="eyebrow">Apply now</p>
          <h2>Submit your career interest.</h2>
          <p>
            Complete the form to register interest in GravityTech project work. The dynamic demo
            saves applications locally and shows a recent submission list below.
          </p>
          <div className="saved-applications glass-card dark-card">
            <h3>Recent local applications</h3>
            <ul id="application-list">
              {applications.length === 0 ? (
                <li>No applications submitted in this browser yet.</li>
              ) : (
                applications.slice(0, 4).map((application) => (
                  <li key={`${application.email}-${application.submittedAt}`}>
                    <strong>{application.name}</strong> - {application.track} (
                    {formatDate(application.submittedAt)})
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <form className="form-card form-card-light glass-card" onSubmit={handleSubmit} noValidate>
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
          <label className={form.touched.phone && form.errors.phone ? "field-invalid" : ""}>
            Phone number
            <input type="tel" placeholder="+91 99999 99999" {...fieldProps("phone")} />
            {form.touched.phone && form.errors.phone ? <span className="field-error">{form.errors.phone}</span> : null}
          </label>
          <label className={form.touched.track && form.errors.track ? "field-invalid" : ""}>
            Preferred track
            <select
              name="track"
              value={form.values.track}
              onBlur={form.handleBlur}
              onChange={selectTrack}
            >
              <option value="">Select a track</option>
              <option>Java Developer Project Work</option>
              <option>Python Developer Project Work</option>
              <option>Data Analytics Project Work</option>
              <option>Frontend and Full-Stack Trainee</option>
              <option>Software Testing and QA</option>
              <option>Client Documentation Assistant</option>
            </select>
            {form.touched.track && form.errors.track ? <span className="field-error">{form.errors.track}</span> : null}
          </label>
          <label className={form.touched.experience && form.errors.experience ? "field-invalid" : ""}>
            Experience level
            <select {...fieldProps("experience")}>
              <option value="">Select experience</option>
              <option>Fresher</option>
              <option>Student / Intern</option>
              <option>0-1 Year</option>
              <option>1-3 Years</option>
              <option>Career Switcher</option>
            </select>
            {form.touched.experience && form.errors.experience ? (
              <span className="field-error">{form.errors.experience}</span>
            ) : null}
          </label>
          <label className={`resume-upload ${form.touched.resume && form.errors.resume ? "field-invalid" : ""}`}>
            Resume upload
            <span className="resume-dropzone">
              <UploadCloud size={24} />
              <span>{form.values.resume ? form.values.resume.name : "Upload PDF, DOC, or DOCX (max 5 MB)"}</span>
            </span>
            <input
              accept=".pdf,.doc,.docx"
              name="resume"
              onBlur={form.handleBlur}
              onChange={form.handleChange}
              type="file"
            />
            {form.touched.resume && form.errors.resume ? (
              <span className="field-error">{form.errors.resume}</span>
            ) : null}
          </label>
          <label className={form.touched.message && form.errors.message ? "field-invalid" : ""}>
            Tell us about your goal
            <textarea
              rows="4"
              placeholder="Mention skills, project interests, and availability"
              {...fieldProps("message")}
            />
            {form.touched.message && form.errors.message ? (
              <span className="field-error">{form.errors.message}</span>
            ) : null}
          </label>
          <button className="button" type="submit">
            Submit Application
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}
