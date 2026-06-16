import { BadgeCheck, Compass, Handshake, Lightbulb, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './About.css';

const values = [
  { icon: ShieldCheck, title: 'Engineering Integrity', text: 'We build with quality, accountability, and long-term maintainability in mind.' },
  { icon: Compass, title: 'Outcome Over Output', text: 'We prioritize business impact over vanity metrics and feature volume.' },
  { icon: Handshake, title: 'Long-Term Partnership', text: 'We embed with your team to become a dependable execution partner.' },
  { icon: Lightbulb, title: 'Radical Transparency', text: 'Clear visibility, honest communication, and data-backed decision making.' },
  { icon: BadgeCheck, title: 'Continuous Learning', text: 'We evolve our craft with every release, sprint, and production challenge.' },
  { icon: MapPin, title: 'Community First', text: 'We grow teams by creating inclusive, mentor-led environments.' }
];

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.15 }
    );
    const targets = document.querySelectorAll('.reveal');
    targets.forEach((target) => observer.observe(target));
    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero page-section reveal">
        <div className="container">
          <h1>We Build Software Teams Want to Use</h1>
          <p>
            GravityTech Software is a Pune-based IT services company building enterprise-grade
            software, talent ecosystems, and payroll platforms for businesses worldwide.
          </p>
          <Link to="/careers" className="btn-primary">Talk to Our Team →</Link>
        </div>
      </section>

      <section className="about-stats page-section reveal">
        <div className="container stats-row">
          {['50+ Products', '30+ Engineers', '3 Offices', '100% Live Projects'].map((item) => (
            <article key={item}>{item}</article>
          ))}
        </div>
      </section>

      <section className="about-story page-section reveal">
        <div className="container story-grid">
          <article>
            <h2>Our Story</h2>
            <p>
              Founded with a mission to make enterprise-grade technology accessible, GravityTech has
              grown from a small engineering team into a full-service IT partner trusted across
              software, education, consulting, and infrastructure sectors.
            </p>
          </article>
          <article className="story-list">
            <p>✦ Pune-based, globally delivered</p>
            <p>✦ Real projects from day one</p>
            <p>✦ AI-first engineering culture</p>
            <p>✦ End-to-end IT partnership</p>
          </article>
        </div>
      </section>

      <section className="about-values page-section reveal">
        <div className="container">
          <h2>Core Values</h2>
          <div className="values-masonry">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title}>
                  <Icon size={24} />
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-offices page-section reveal">
        <div className="container office-grid">
          {[
            ['Pune', 'Baner, Pune, Maharashtra', 'India 🇮🇳'],
            ['Dubai', 'Business Bay, Dubai', 'UAE 🇦🇪'],
            ['Delaware', 'Wilmington, Delaware', 'USA 🇺🇸']
          ].map(([city, address, country]) => (
            <article key={city}>
              <MapPin size={22} />
              <h3>{city}</h3>
              <p>{address}</p>
              <span>{country}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
