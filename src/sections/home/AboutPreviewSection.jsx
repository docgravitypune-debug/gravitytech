import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mentorReviewUrl from "../../../assets/career-mentor-review.svg";
import demoDayUrl from "../../../assets/career-demo-day.svg";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { aboutStats } from "../../data.js";
import { routes } from "../../routes.js";

export default function AboutPreviewSection() {
  return (
    <AnimatedSection id="about" className="section section-porto porto-about-section">
      <div className="container porto-about-grid">
        <motion.div
          className="porto-about-visual"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="porto-about-photo primary">
            <img src={mentorReviewUrl} alt="Mentor reviewing project work with a team member" />
          </div>
          <div className="porto-about-photo secondary">
            <img src={demoDayUrl} alt="GravityTech demo day presentation" />
          </div>
          <div className="porto-about-stat-pill">
            <strong>14+</strong>
            <span>Client partners</span>
          </div>
        </motion.div>

        <div className="porto-about-copy">
          <p className="porto-eyebrow">About GravityTech</p>
          <h2>
            We turn client requirements into <span className="text-gradient">real project work.</span>
          </h2>
          <span className="porto-divider left" aria-hidden="true" />
          <p>
            GravityTech Software blends software delivery, guided project practice, and career-ready
            mentorship across Java, Python, analytics, React, QA, DevOps, and documentation.
          </p>
          <div className="porto-about-stats">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <Link className="button porto-button-primary" to={routes.about}>
            Read About Us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
