import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground.jsx';
import Crystal from './Crystal/Crystal.jsx';

function HeroAction({ action }) {
  const className = `button ${action.variant === 'secondary' ? 'button-secondary' : ''}`;

  if (action.href) {
    return (
      <a className={className} href={action.href}>
        <span>{action.label}</span>
        <ArrowUpRight size={16} />
      </a>
    );
  }

  return (
    <Link className={className} to={action.to}>
      <span>{action.label}</span>
      <ArrowUpRight size={16} />
    </Link>
  );
}

const logos = ['NimbusCare', 'FinEdge', 'Veltrix', 'Orbixa', 'Northbay', 'Quanta', 'Harborline', 'Crestwave'];

export default function PageHero({ eyebrow, title, titleAccent, aside, actions = [] }) {
  return (
    <section className="hero">
      <AnimatedBackground />
      <Crystal />
      <div className="hero-glow hero-glow--cyan" />
      <div className="hero-glow hero-glow--violet" />

      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow ? <p className="eyebrow pulse-label">{eyebrow}</p> : null}
          <h1>
            {title}
            {titleAccent ? (
              <>
                <br />
                <span className="text-gradient">{titleAccent}</span>
              </>
            ) : null}
          </h1>

          {aside ? <p className="hero-text">{aside}</p> : null}

          {actions.length > 0 ? (
            <div className="hero-actions">
              {actions.map((action) => (
                <HeroAction action={action} key={`${action.label}-${action.to || action.href}`} />
              ))}
            </div>
          ) : null}

          <dl className="hero-metrics">
            <div>
              <dt>50+</dt>
              <dd>Products</dd>
            </div>
            <div>
              <dt>30+</dt>
              <dd>Engineers</dd>
            </div>
            <div>
              <dt>100%</dt>
              <dd>Live Projects</dd>
            </div>
            <div>
              <dt>3</dt>
              <dd>Global Offices</dd>
            </div>
          </dl>

          <div className="hero-logo-strip">
            <p>Trusted by ambitious teams</p>
            <div className="marquee-wrap">
              <div className="marquee-track">
                {[...logos, ...logos].map((item, idx) => (
                  <span key={`${item}-${idx}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
