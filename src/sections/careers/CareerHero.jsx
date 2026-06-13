import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Sparkles } from "lucide-react";
import AnimatedBackground from "../../components/AnimatedBackground.jsx";

export default function CareerHero() {
  return (
    <section className="hero section career-hero futuristic-hero">
      <AnimatedBackground variant="career" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="eyebrow pulse-label">
            <Sparkles size={16} /> Careers and real-time project work
          </p>
          <h1>
            Grow with live client-style <span>software missions.</span>
          </h1>
          <p className="hero-text">
            GravityTech Software welcomes freshers, interns, and early-career developers who want
            hands-on project exposure in Java, Python, data analytics, React, web apps, and delivery
            practices.
          </p>
          <div className="hero-actions">
            <a className="button" href="job-openings.html">
              Job Openings <BriefcaseBusiness size={18} />
            </a>
            <a className="button" href="#apply">
              Apply Now <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#openings">
              <BriefcaseBusiness size={18} /> See Tracks
            </a>
          </div>
        </motion.div>
        <motion.aside
          className="career-panel holo-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <h2>What you will practice</h2>
          <ul className="check-list">
            <li>
              <CheckCircle2 size={18} /> Requirement analysis from real client scenarios
            </li>
            <li>
              <CheckCircle2 size={18} /> Git, code reviews, documentation, and demos
            </li>
            <li>
              <CheckCircle2 size={18} /> Backend, frontend, analytics, and deployment tasks
            </li>
            <li>
              <CheckCircle2 size={18} /> Portfolio-ready project outcomes
            </li>
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
