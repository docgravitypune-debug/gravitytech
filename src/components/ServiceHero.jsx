import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function HeroAction({ action }) {
  const className = `service-hero-cta ${action.variant === "secondary" ? "secondary" : ""}`;

  if (action.href) {
    return (
      <a className={className} href={action.href}>
        <span>{action.label}</span>
        <span className="service-hero-cta-icon" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </a>
    );
  }

  return (
    <Link className={className} to={action.to}>
      <span>{action.label}</span>
      <span className="service-hero-cta-icon" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  );
}

export default function ServiceHero({ service }) {
  const { hero } = service;

  return (
    <section className={`service-hero service-hero--${hero.gradient}`}>
      <div className="service-hero-bg" aria-hidden="true">
        <motion.span
          className="service-hero-orb service-hero-orb-a"
          animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="service-hero-orb service-hero-orb-b"
          animate={{ x: [0, -20, 0], y: [0, 16, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="service-hero-gridlines" />
        <span className="service-hero-noise" />
      </div>

      <div className="container service-hero-grid">
        <motion.div
          className="service-hero-main"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="service-hero-eyebrow">{hero.eyebrow}</p>
          <h1>
            {hero.title}
            <br />
            <span>{hero.titleAccent}</span>
          </h1>
          {hero.actions?.length ? (
            <div className="service-hero-actions">
              {hero.actions.map((action) => (
                <HeroAction action={action} key={`${action.label}-${action.to || action.href}`} />
              ))}
            </div>
          ) : null}
        </motion.div>

        <motion.aside
          className="service-hero-aside"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
        >
          <p>{hero.aside}</p>
          <ul className="service-hero-highlights">
            {service.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
