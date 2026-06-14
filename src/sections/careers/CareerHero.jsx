import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Sparkles } from "lucide-react";
import AnimatedBackground from "../../components/AnimatedBackground.jsx";

export default function CareerHero() {
  return (
    <section className="hero section career-hero futuristic-hero">
      <AnimatedBackground variant="career" />
      <div className="container career-hero-grid">
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
            Innovate, Belong, <span>And Thrive</span>
          </h1>
          <p className="hero-text">
            Shape your future through client-style software projects, mentor-led delivery, and
            practical experience across Java, Python, React, analytics, QA, DevOps, and documentation.
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
          className="career-hero-note"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <p>
            Bring your whole self to a team that believes in you. At GravityTech, you will find a
            place that sees your potential, nurtures it, and celebrates it.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
