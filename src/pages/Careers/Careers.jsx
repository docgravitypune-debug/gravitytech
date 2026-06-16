import { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  Clock,
  FileText,
  Heart,
  Layers,
  Monitor,
  Presentation,
  Rocket,
  Shield,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import './Careers.css';

const perks = [
  { title: 'Health & Wellness Support', icon: Heart },
  { title: 'Flexible Work Culture', icon: Clock },
  { title: 'Transparent Career Growth', icon: TrendingUp },
  { title: 'Dedicated Learning Budget', icon: BookOpen },
  { title: 'Real Project Ownership', icon: Layers },
  { title: 'Community & Mentor Exposure', icon: Users },
  { title: 'Career Development Initiatives', icon: Rocket },
  { title: 'High-end Project Tools', icon: Monitor },
  { title: 'Performance Bonuses & Referrals', icon: Star },
  { title: 'Equal Opportunities', icon: Shield },
  { title: 'Client Demo Exposure', icon: Presentation },
  { title: 'Interview & Portfolio Support', icon: FileText }
];

const roles = [
  {
    title: 'Full Stack Developer (React / Node.js)',
    meta: 'Pune · Hybrid | Full-time',
    desc: 'Build robust frontend and backend systems for enterprise clients. Collaborate with product, design, and cloud teams to ship production-ready features fast.'
  },
  {
    title: 'AI/ML Engineer',
    meta: 'Pune · Hybrid | Full-time',
    desc: 'Design, train, and deploy ML models for business intelligence and automation. Work on retrieval systems, model optimization, and data workflows.'
  },
  {
    title: 'DevOps Engineer',
    meta: 'Remote | Full-time',
    desc: 'Drive CI/CD, observability, infrastructure automation, and cloud reliability. Implement secure release pipelines and resilient deployment strategies.'
  },
  {
    title: 'UI/UX Designer',
    meta: 'Pune · Hybrid | Full-time',
    desc: 'Craft futuristic, accessible interfaces and end-to-end user journeys. Partner with engineering to deliver polished, high-conversion digital products.'
  },
  {
    title: 'QA Automation Engineer',
    meta: 'Remote | Full-time',
    desc: 'Own test strategy for web platforms with automated coverage and performance validation. Ensure release quality through scalable test suites.'
  },
  {
    title: 'HR & Talent Specialist',
    meta: 'Pune · On-site | Full-time',
    desc: 'Manage talent operations, hiring funnels, and candidate experience. Align workforce plans with rapid delivery and SCIP cohort growth.'
  }
];

const applyOptions = [...roles.map((role) => role.title), 'SCIP Program'];

function Careers() {
  const [openRole, setOpenRole] = useState(0);
  const [selectedRole, setSelectedRole] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card');
    const move = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const rotateX = ((event.clientY - rect.top - rect.height / 2) / rect.height) * -7;
      const rotateY = ((event.clientX - rect.left - rect.width / 2) / rect.width) * 7;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const leave = (event) => {
      event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', move);
      card.addEventListener('mouseleave', leave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', move);
        card.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const chips = useMemo(() => ['Live Projects', 'Mentored Growth', 'Global Exposure'], []);

  const handleApplyRole = (role) => {
    setSelectedRole(role);
    scrollToId('apply');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(true);
    event.target.reset();
    setSelectedRole('');
  };

  return (
    <div className="careers-page">
      <section className="careers-hero fade-up">
        <div className="mesh-aurora" />
        <div className="section-wrap">
          <h1>Build Your Career at GravityTech</h1>
          <p>Real projects. Real clients. Real growth.</p>
          <div className="hero-buttons">
            <button type="button" className="glow-button" onClick={() => scrollToId('open-positions')}>
              View Open Positions
            </button>
            <button type="button" className="ghost-button" onClick={() => scrollToId('scip')}>
              Learn About SCIP
            </button>
          </div>
        </div>
      </section>

      <section className="perks-section fade-up">
        <div className="section-wrap">
          <h2 className="hud-heading">Why Work With Us</h2>
          <div className="masonry-perks">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <article key={perk.title} className="glass-card tilt-card perk-card">
                  <Icon size={20} />
                  <h3>{perk.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="open-positions fade-up" id="open-positions">
        <div className="section-wrap">
          <h2 className="hud-heading">Open Positions</h2>
          <div className="accordion-list">
            {roles.map((role, index) => (
              <article className="glass-card accordion-card" key={role.title}>
                <button
                  type="button"
                  className="accordion-trigger"
                  onClick={() => setOpenRole(openRole === index ? -1 : index)}
                >
                  <span>{role.title}</span>
                  <small>{role.meta}</small>
                </button>
                {openRole === index && (
                  <div className="accordion-content">
                    <p>{role.desc}</p>
                    <button
                      type="button"
                      className="ghost-button"
                      onClick={() => handleApplyRole(role.title)}
                    >
                      Apply Now →
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scip-section fade-up" id="scip">
        <div className="mesh-aurora" />
        <div className="section-wrap scip-content glass-card">
          <span className="scip-badge">EXCLUSIVE PROGRAM</span>
          <h2>SCIP — Specialized Corporate Incubation Program</h2>
          <h3>We don't just hire. We build careers from the ground up.</h3>
          <p>
            SCIP is GravityTech&apos;s flagship talent development initiative. We hire driven
            individuals — freshers, career switchers, and early-stage professionals — and put them
            through an intensive, job-oriented training program. Every SCIP participant works on
            live client projects from day one, building a real portfolio under expert mentorship.
          </p>

          <div className="timeline">
            <article className="glass-card">
              <h4>Selective Hiring</h4>
              <p>
                We identify raw talent — not just credentials. Aptitude, problem-solving, and drive
                matter more than years of experience.
              </p>
            </article>
            <article className="glass-card">
              <h4>Intensive Job-Oriented Training</h4>
              <p>
                8–12 weeks of structured training in your domain — full stack, AI, DevOps, QA, or
                HR tech — with daily reviews and mentored sprints.
              </p>
            </article>
            <article className="glass-card">
              <h4>Live Project Deployment</h4>
              <p>
                You work on real client deliverables from week 3 onwards. No dummy projects. No
                waiting. Real responsibility, real impact.
              </p>
            </article>
          </div>

          <div className="scip-benefits">
            {[
              'Guaranteed live project exposure',
              'Mentorship from senior engineers',
              'Portfolio-ready by program end',
              'Job placement assistance',
              'Certification upon completion',
              'Pathway to full-time role at GravityTech'
            ].map((benefit) => (
              <article className="glass-card" key={benefit}>
                <p>{benefit}</p>
              </article>
            ))}
          </div>

          <button type="button" className="glow-button" onClick={() => handleApplyRole('SCIP Program')}>
            Apply for SCIP →
          </button>
          <small>SCIP runs in quarterly cohorts. Next batch: Q3 2026</small>
        </div>
      </section>

      <section className="apply-section fade-up" id="apply">
        <div className="section-wrap apply-grid">
          <aside className="apply-copy glass-card">
            <h2>Let&apos;s Talk Opportunities</h2>
            <div className="chip-list">
              {chips.map((chip) => (
                <span className="tech-tag" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </aside>

          <form className="glass-card apply-form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input required name="name" type="text" />
            </label>
            <label>
              Email
              <input required name="email" type="email" />
            </label>
            <label>
              Phone
              <input required name="phone" type="tel" />
            </label>
            <label>
              Role Applying For
              <select
                required
                name="role"
                value={selectedRole}
                onChange={(event) => setSelectedRole(event.target.value)}
              >
                <option value="">Select role</option>
                {applyOptions.map((role) => (
                  <option value={role} key={role}>
                    {role}
                  </option>
                ))}
              </select>
            </label>
            <label>
              LinkedIn / Portfolio URL
              <input required name="portfolio" type="url" />
            </label>
            <label>
              Why GravityTech?
              <textarea required name="message" rows="4" />
            </label>
            <button type="submit" className="glow-button">
              Submit
            </button>
            {success && <p className="success">Application submitted successfully. Our team will connect soon.</p>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Careers;
