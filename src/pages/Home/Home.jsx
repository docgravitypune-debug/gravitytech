import { useEffect } from 'react';
import { Blocks, BrainCircuit, DatabaseZap, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { label: 'Products', value: '50+' },
  { label: 'Engineers', value: '30+' },
  { label: 'Live Projects', value: '100%' },
  { label: 'Global Offices', value: '3' }
];

const teasers = [
  {
    icon: <Blocks size={26} />,
    title: 'CRM Solutions',
    desc: 'High-performance customer lifecycle platforms with AI pipeline optimization.',
    link: '/services#crm'
  },
  {
    icon: <BrainCircuit size={26} />,
    title: 'Talent Acquisition Platform',
    desc: 'Recruitment systems with intelligent screening and automated coordination.',
    link: '/services#talent'
  },
  {
    icon: <DatabaseZap size={26} />,
    title: 'Enterprise Solutions',
    desc: 'Mission-critical software ecosystems engineered for scale and security.',
    link: '/services#enterprise'
  },
  {
    icon: <Orbit size={26} />,
    title: 'Third Party Payroll',
    desc: 'Compliant payroll automation with real-time visibility across vendors.',
    link: '/services#payroll'
  }
];

const differentiators = [
  'Speed of Delivery',
  'Engineering Rigor',
  'AI-First Approach',
  'Live Project Training',
  'Domain Expertise',
  'Global Delivery'
];

function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card');

    const handleMouseMove = (event) => {
      const card = event.currentTarget;
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const rotateX = ((y - bounds.height / 2) / bounds.height) * -10;
      const rotateY = ((x - bounds.width / 2) / bounds.width) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const reset = (event) => {
      event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', reset);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', reset);
      });
    };
  }, []);

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="mesh-aurora" />
        <div className="floating-dots" />
        <div className="scan-overlay" />
        <div className="section-wrap hero-content fade-up">
          <div className="headline-shell glass-card">
            <h1>Engineering the Future of Enterprise Technology</h1>
            <p>
              GravityTech Software delivers AI-powered software solutions, talent ecosystems, and
              enterprise platforms built for the next decade.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="glow-button">
                Explore Services
              </Link>
              <Link to="/careers" className="ghost-button">
                View Careers
              </Link>
            </div>
          </div>

          <div className="stat-row">
            {stats.map((stat) => (
              <article className="glass-card tilt-card stat-card" key={stat.label}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-teaser fade-up">
        <div className="section-wrap">
          <h2 className="hud-heading">What We Build</h2>
          <div className="teaser-grid">
            {teasers.map((item) => (
              <article className="glass-card tilt-card teaser-card" key={item.title}>
                <div className="teaser-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link to={item.link}>Learn More →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section fade-up">
        <div className="section-wrap">
          <h2 className="hud-heading">Why GravityTech</h2>
          <div className="bento-grid">
            <article className="glass-card bento-feature">
              <h3>Enterprise velocity without compromise.</h3>
              <p>
                We combine architecture-grade engineering, agile execution, and AI acceleration to
                deliver high-impact platforms in record timelines.
              </p>
            </article>
            {differentiators.map((item) => (
              <article key={item} className="glass-card bento-card tilt-card">
                <h4>{item}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta fade-up">
        <div className="mesh-aurora" />
        <div className="section-wrap cta-card glass-card">
          <h2>Ready to Build Something Extraordinary?</h2>
          <Link to="/careers#apply" className="glow-button">
            Start a Project →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
