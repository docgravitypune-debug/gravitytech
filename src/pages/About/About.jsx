import { Linkedin, MapPin } from 'lucide-react';
import './About.css';

const stats = ['50+ Products', '30+ Engineers', '3 Offices', '100% Live Projects'];
const values = [
  'Engineering Integrity',
  'Outcome Over Output',
  'Long-Term Partnership',
  'Radical Transparency',
  'Continuous Learning',
  'Community First'
];

function About() {
  return (
    <div className="about-page">
      <section className="about-hero fade-up">
        <div className="section-wrap">
          <h1>We Engineer What&apos;s Next</h1>
          <p>
            GravityTech Software is a Pune-based IT services company building enterprise-grade
            software, AI platforms, and talent ecosystems for businesses worldwide.
          </p>
        </div>
      </section>

      <section className="about-stats fade-up">
        <div className="section-wrap stats-grid">
          {stats.map((stat) => (
            <article className="glass-card tilt-card" key={stat}>
              <h3>{stat}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="about-story fade-up">
        <div className="section-wrap story-grid">
          <article>
            <h2 className="hud-heading">Our Story</h2>
            <p>
              Founded with a mission to make enterprise-grade technology accessible, GravityTech has
              grown from a small engineering team into a full-service IT partner trusted by
              businesses across software, education, consulting, and infrastructure sectors.
            </p>
          </article>
          <article className="glass-card feature-list">
            <p>Enterprise architecture and digital modernization</p>
            <p>AI platform engineering with production deployment</p>
            <p>Talent acceleration through live client delivery</p>
          </article>
        </div>
      </section>

      <section className="about-values fade-up">
        <div className="section-wrap">
          <h2 className="hud-heading">Core Values</h2>
          <div className="value-columns">
            {values.map((value) => (
              <article key={value} className="glass-card">
                <h3>{value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team fade-up">
        <div className="section-wrap">
          <h2 className="hud-heading">Leadership</h2>
          <div className="team-grid">
            {[
              ['Aarav Kulkarni', 'Founder & CEO'],
              ['Mira Shah', 'Director of Engineering'],
              ['Rohan Iyer', 'Head of Talent Programs']
            ].map(([name, role]) => (
              <article className="glass-card" key={name}>
                <h3>{name}</h3>
                <p>{role}</p>
                <button type="button" aria-label={`View ${name} on LinkedIn`}>
                  <Linkedin size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-offices fade-up">
        <div className="section-wrap">
          <h2 className="hud-heading">Offices</h2>
          <div className="offices-grid">
            {[
              ['Pune India', 'Baner Corporate Hub, Pune'],
              ['Dubai UAE', 'Business Bay Innovation Tower'],
              ['Delaware USA', 'Wilmington Enterprise Center']
            ].map(([location, address]) => (
              <article key={location} className="glass-card">
                <MapPin size={18} />
                <h3>{location}</h3>
                <p>{address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
