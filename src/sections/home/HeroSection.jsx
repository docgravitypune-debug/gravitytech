import { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logoUrl from "../../../assets/logo.svg";
import AnimatedBackground from "../../components/AnimatedBackground.jsx";
import useAnimatedMetrics from "../../hooks/useAnimatedMetrics.js";
import { clients, heroMetrics } from "../../data.js";
import { routes } from "../../routes.js";

const heroVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const floatingBadges = [
  { label: "Java APIs", style: { top: "16%", left: "6%" } },
  { label: "React UI", style: { top: "24%", right: "10%" } },
  { label: "Data Analytics", style: { bottom: "18%", left: "12%" } },
  { label: "Cloud Ready", style: { bottom: "12%", right: "8%" } },
];

export default function HeroSection() {
  const metrics = useAnimatedMetrics(useMemo(() => heroMetrics, []));
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 180,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 180,
    damping: 20,
  });

  const handleCardMove = (event) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetCardTilt = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="hero section futuristic-hero home-hero">
      <AnimatedBackground />
      <div className="hero-floaters" aria-hidden="true">
        {floatingBadges.map((badge, index) => (
          <motion.span
            className="hero-floater"
            style={badge.style}
            animate={{ y: [0, -10, 0], opacity: [0.72, 1, 0.72] }}
            transition={{
              duration: 4.8 + index * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            key={badge.label}
          >
            {badge.label}
          </motion.span>
        ))}
      </div>
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={heroVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p className="eyebrow pulse-label" variants={heroItemVariants}>
            <Sparkles size={16} /> Client project delivery + career-ready training
          </motion.p>
          <motion.h1 variants={heroItemVariants}>
            Innovate, build, and launch <span className="text-gradient">real software.</span>
          </motion.h1>
          <motion.p className="hero-text" variants={heroItemVariants}>
            GravityTech Software helps clients ship dependable technology solutions and gives
            working professionals, freshers, and interns real project exposure across Java, Python,
            data analytics, React, web apps, and cloud-ready systems.
          </motion.p>
          <motion.div className="hero-actions" variants={heroItemVariants}>
            <motion.a
              className="button"
              href="#projects"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Project Tracks <ArrowRight size={18} />
            </motion.a>
            <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link className="button button-secondary" to={routes.careers}>
                <PlayCircle size={18} /> Apply for Project Work
              </Link>
            </motion.div>
          </motion.div>
          <motion.dl className="hero-metrics" aria-label="GravityTech delivery highlights" variants={heroItemVariants}>
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: index * 0.02 }}
              >
                <dt>
                  {metric.current}
                  {metric.suffix || ""}
                </dt>
                <dd>{metric.label}</dd>
              </motion.div>
            ))}
          </motion.dl>
          <motion.div className="hero-logo-strip" aria-label="Trusted client names" variants={heroItemVariants}>
            <p>Trusted by teams building real software outcomes</p>
            <div>
              {clients.slice(0, 8).map((client) => (
                <span key={client.name}>{client.name}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.aside
          className="hero-card"
          aria-label="Featured project lab"
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          onMouseMove={handleCardMove}
          onMouseLeave={resetCardTilt}
          ref={cardRef}
        >
          <motion.div
            className="orbit-card holo-card"
            whileHover={{ boxShadow: "0 30px 90px rgba(72, 44, 118, 0.16)" }}
          >
            <div className="orbit-rings">
              <span />
              <span />
              <span />
            </div>
            <motion.img
              src={logoUrl}
              alt="GravityTech Software logo"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
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
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}
