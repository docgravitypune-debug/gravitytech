import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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

export default function PageHero({ eyebrow, title, titleAccent, aside, actions = [] }) {
  return (
    <section className="coditas-hero">
      <div className="coditas-hero-bg" aria-hidden="true">
        <div className="coditas-hero-streaks" />
        <div className="coditas-hero-noise" />
      </div>
      <div className="container coditas-hero-grid">
        <div className="coditas-hero-main">
          {eyebrow ? <p className="coditas-hero-eyebrow">{eyebrow}</p> : null}
          <h1>
            {title}
            {titleAccent ? (
              <>
                <br />
                <span>{titleAccent}</span>
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
        </div>
        {aside ? (
          <aside className="coditas-hero-aside">
            <p>{aside}</p>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
