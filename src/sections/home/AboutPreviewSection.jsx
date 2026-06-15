import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { aboutStats } from "../../data.js";
import { routes } from "../../routes.js";

export default function AboutPreviewSection() {
  return (
    <AnimatedSection id="about" className="pro-section pro-about">
      <div className="container pro-about-grid">
        <div className="pro-about-copy">
          <p className="pro-eyebrow">About GravityTech</p>
          <h2>We turn client requirements into production-minded project work.</h2>
          <p>
            GravityTech Software blends software delivery, guided project practice, and career-ready
            mentorship across Java, Python, analytics, React, QA, DevOps, and documentation.
          </p>
          <Link className="button pro-button" to={routes.about}>
            Read About Us <ArrowRight size={18} />
          </Link>
        </div>

        <div className="pro-about-stats">
          {aboutStats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
