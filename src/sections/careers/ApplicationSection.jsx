import AnimatedSection from "../../components/AnimatedSection.jsx";
import { formatDate } from "../../utils/format.js";

export default function ApplicationSection({ applications, onSubmit, selectedTrack, setSelectedTrack }) {
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
        <form className="form-card form-card-light glass-card" onSubmit={onSubmit}>
          <label>
            Full name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Phone number
            <input name="phone" type="tel" placeholder="+91 99999 99999" required />
          </label>
          <label>
            Preferred track
            <select
              name="track"
              required
              value={selectedTrack}
              onChange={(event) => setSelectedTrack(event.target.value)}
            >
              <option value="">Select a track</option>
              <option>Java Developer Project Work</option>
              <option>Python Developer Project Work</option>
              <option>Data Analytics Project Work</option>
              <option>Frontend and Full-Stack Trainee</option>
              <option>Software Testing and QA</option>
              <option>Client Documentation Assistant</option>
            </select>
          </label>
          <label>
            Experience level
            <select name="experience" required defaultValue="">
              <option value="">Select experience</option>
              <option>Fresher</option>
              <option>Student / Intern</option>
              <option>0-1 Year</option>
              <option>1-3 Years</option>
              <option>Career Switcher</option>
            </select>
          </label>
          <label>
            Tell us about your goal
            <textarea
              name="message"
              rows="4"
              placeholder="Mention skills, project interests, and availability"
              required
            />
          </label>
          <button className="button" type="submit">
            Submit Application
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}
