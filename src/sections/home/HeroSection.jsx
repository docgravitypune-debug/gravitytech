import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import teamSprintUrl from "../../../assets/career-team-sprint.svg";
import useAnimatedMetrics from "../../hooks/useAnimatedMetrics.js";
import { heroFeatures, heroMetrics } from "../../data.js";
import { routes } from "../../routes.js";
import { Icon } from "../../utils/icons.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.08, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  const metrics = useAnimatedMetrics(useMemo(() => heroMetrics, []));

  return (
    <section className="hero section porto-hero">
      <div className="porto-hero-bg" aria-hidden="true" />
      <div className="container porto-hero-grid">
        <motion.div
          className="porto-hero-copy"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p className="porto-eyebrow" custom={0} variants={fadeUp}>
            Welcome to GravityTech
          </motion.p>
          <motion.h1 custom={1} variants={fadeUp}>
            We design, build, and launch <strong>real software.</strong>
          </motion.h1>
          <motion.p className="porto-lead" custom={2} variants={fadeUp}>
            GravityTech Software helps clients ship dependable technology solutions and gives
            professionals, freshers, and interns hands-on project exposure across Java, Python,
            analytics, React, and cloud-ready systems.
          </motion.p>
          <motion.div className="porto-hero-actions" custom={3} variants={fadeUp}>
            <a className="button porto-button-primary" href="#projects">
              Explore Projects <ArrowRight size={18} />
            </a>
            <Link className="button button-secondary porto-button-outline" to={routes.careers}>
              <PlayCircle size={18} /> Start Project Work
            </Link>
          </motion.div>
          <motion.dl className="porto-hero-metrics" custom={4} variants={fadeUp}>
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt>
                  {metric.current}
                  {metric.suffix || ""}
                </dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          className="porto-hero-visual"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
        >
          <div className="porto-hero-frame">
            <img src={teamSprintUrl} alt="GravityTech team collaborating on software delivery" />
            <div className="porto-hero-chip porto-hero-chip-top">Client Project Lab</div>
            <div className="porto-hero-chip porto-hero-chip-bottom">42+ Live Modules</div>
          </div>
        </motion.div>
      </div>

      <div className="container porto-featured-row">
        {heroFeatures.map((feature, index) => (
          <motion.article
            className="porto-featured-box"
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span className="porto-icon-circle">
              <Icon name={feature.icon} size={22} />
            </span>
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
