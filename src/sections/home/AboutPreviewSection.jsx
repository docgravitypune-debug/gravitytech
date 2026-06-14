import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { aboutStats } from "../../data.js";
import { routes } from "../../routes.js";

export default function AboutPreviewSection() {
  return (
    <AnimatedSection id="about" className="section about-preview-section">
      <div className="container about-preview-grid">
        <div>
          <p className="eyebrow">About GravityTech</p>
          <h2>
            We turn client requirements into <span className="text-gradient">real project work.</span>
          </h2>
          <p>
            GravityTech Software blends software delivery, guided project practice, and career-ready
            mentorship across Java, Python, analytics, React, QA, DevOps, and documentation.
          </p>
          <Link className="button" to={routes.about}>
            Read About Us <ArrowRight size={18} />
          </Link>
        </div>
        <div className="about-mini-stats">
          {aboutStats.map((stat) => (
            <article className="glass-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
