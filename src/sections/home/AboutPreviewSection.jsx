import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import GradientCard from "../../components/GradientCard.jsx";
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

          <div className="about-link-tiles">
            <GradientCard className="about-link-tile" showArrow={false} to={routes.projects} variant="cyan">
              <h3>Explore Projects</h3>
              <p>Java, Python, analytics, and web tracks.</p>
            </GradientCard>
            <GradientCard className="about-link-tile" showArrow={false} to={routes.clients} variant="violet">
              <h3>Meet Our Clients</h3>
              <p>Partners across software and education.</p>
            </GradientCard>
          </div>
        </div>

        <div className="pro-about-stats">
          {aboutStats.map((stat, index) => (
            <GradientCard
              className="pro-about-stat-card"
              delay={index * 0.05}
              key={stat.label}
              variant={index % 2 === 0 ? "lime" : "sunset"}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </GradientCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
