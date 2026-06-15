import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { clients } from "../../data.js";
import { routes } from "../../routes.js";

export default function HeroSection() {
  return (
    <section className="pro-hero">
      <div className="container pro-hero-inner">
        <p className="pro-eyebrow">Software Delivery Partner</p>
        <h1>
          Technology delivery and project labs for enterprises and growing teams.
        </h1>
        <p className="pro-lead">
          GravityTech Software helps clients ship dependable solutions and gives professionals,
          freshers, and interns structured exposure across Java, Python, analytics, React, and
          cloud-ready systems.
        </p>
        <div className="pro-hero-actions">
          <a className="button pro-button" href="#contact">
            Start a Project <ArrowRight size={18} />
          </a>
          <Link className="button pro-button-outline" to={routes.careers}>
            Explore Careers
          </Link>
        </div>
      </div>

      <div className="pro-trusted">
        <div className="container">
          <p>Trusted by teams across software, education, consulting, and infrastructure</p>
          <div className="pro-logo-track" aria-hidden="true">
            <div>
              {[...clients, ...clients].map((client, index) => (
                <span key={`${client.name}-${index}`}>{client.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
