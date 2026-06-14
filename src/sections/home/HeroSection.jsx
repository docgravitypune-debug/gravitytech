import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logoUrl from "../../../assets/logo.svg";
import AnimatedBackground from "../../components/AnimatedBackground.jsx";
import useAnimatedMetrics from "../../hooks/useAnimatedMetrics.js";
import { clients, heroMetrics } from "../../data.js";
import { routes } from "../../routes.js";

export default function HeroSection() {
  const metrics = useAnimatedMetrics(useMemo(() => heroMetrics, []));

  return (
    <section className="hero section futuristic-hero">
      <AnimatedBackground />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="eyebrow pulse-label">
            <Sparkles size={16} /> Client project delivery + career-ready training
          </p>
          <h1>
            Innovate, build, and launch <span className="text-gradient">real software.</span>
          </h1>
          <p className="hero-text">
            GravityTech Software helps clients ship dependable technology solutions and gives
            working professionals, freshers, and interns real project exposure across Java, Python,
            data analytics, React, web apps, and cloud-ready systems.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              Explore Project Tracks <ArrowRight size={18} />
            </a>
            <Link className="button button-secondary" to={routes.careers}>
              <PlayCircle size={18} /> Apply for Project Work
            </Link>
          </div>
          <dl className="hero-metrics" aria-label="GravityTech delivery highlights">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt>
                  {metric.current}
                  {metric.suffix || ""}
                </dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
          <div className="hero-logo-strip" aria-label="Trusted client names">
            <p>Trusted by teams building real software outcomes</p>
            <div>
              {clients.slice(0, 8).map((client) => (
                <span key={client.name}>{client.name}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.aside
          className="hero-card"
          aria-label="Featured project lab"
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div className="orbit-card holo-card">
            <div className="orbit-rings">
              <span />
              <span />
              <span />
            </div>
            <img src={logoUrl} alt="GravityTech Software logo" />
            <h2>Real-Time Client Project Lab</h2>
            <p>
              Guided delivery sprints, code reviews, demos, documentation, dashboards, and
              production-style workflows.
            </p>
            <ul className="check-list">
              <li>
                <ShieldCheck size={18} /> Java enterprise APIs
              </li>
              <li>
                <ShieldCheck size={18} /> Python automation and AI
              </li>
              <li>
                <ShieldCheck size={18} /> Data analytics dashboards
              </li>
              <li>
                <ShieldCheck size={18} /> Client documentation and demos
              </li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
