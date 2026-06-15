import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroScene3D from "./HeroScene3D.jsx";

function HeroAction({ action }) {
  const className = `coditas-hero-cta ${action.variant === "secondary" ? "secondary" : ""}`;

  if (action.href) {
    return (
      <a className={className} href={action.href}>
        <span>{action.label}</span>
        <span className="coditas-hero-cta-icon" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </a>
    );
  }

  return (
    <Link className={className} to={action.to}>
      <span>{action.label}</span>
      <span className="coditas-hero-cta-icon" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  );
}

export default function PageHero({ eyebrow, title, titleAccent, aside, actions = [], sceneVariant = "default" }) {
  return (
    <section className="coditas-hero">
      <div className="coditas-hero-bg" aria-hidden="true">
        <div className="coditas-hero-streaks" />
        <div className="coditas-hero-noise" />
      </div>
      <HeroScene3D variant={sceneVariant} />
      <div className="container coditas-hero-grid">
        <motion.div
          className="coditas-hero-main"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow ? <p className="coditas-hero-eyebrow">{eyebrow}</p> : null}
          <h1 className="hero-title-3d">
            {title}
            {titleAccent ? (
              <>
                <br />
                <span className="hero-accent-3d">{titleAccent}</span>
              </>
            ) : null}
          </h1>
          {actions.length > 0 ? (
            <div className="coditas-hero-actions">
              {actions.map((action) => (
                <HeroAction action={action} key={`${action.label}-${action.to || action.href}`} />
              ))}
            </div>
          ) : null}
        </motion.div>
        {aside ? (
          <motion.aside
            className="coditas-hero-aside"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{aside}</p>
          </motion.aside>
        ) : null}
      </div>
    </section>
  );
}
