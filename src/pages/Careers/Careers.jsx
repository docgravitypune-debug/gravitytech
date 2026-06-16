import { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  Clock,
  FileText,
  Heart,
  Layers,
  Monitor,
  Presentation,
  Rocket,
  Search,
  Shield,
  Star,
  TrendingUp,
  Users,
  CheckCircle2
} from 'lucide-react';
import './Careers.css';

const perks = [
  { icon: Heart, title: 'Health & Wellness Support', desc: 'Comprehensive wellness and insurance support for long-term health.' },
  { icon: Clock, title: 'Flexible Work Culture', desc: 'Flexible schedules and trust-based execution for sustainable productivity.' },
  { icon: TrendingUp, title: 'Transparent Career Growth', desc: 'Clear growth tracks with regular progression checkpoints.' },
  { icon: BookOpen, title: 'Dedicated Learning Budget', desc: 'Annual budget for certifications, tools, and advanced coursework.' },
  { icon: Layers, title: 'Real Project Ownership', desc: 'Direct ownership of production modules and client-facing outcomes.' },
  { icon: Users, title: 'Community & Mentor Exposure', desc: 'Work closely with senior mentors in high-collaboration squads.' },
  { icon: Rocket, title: 'Career Development Initiatives', desc: 'Internal accelerators designed to help you level up rapidly.' },
  { icon: Monitor, title: 'High-end Project Tools', desc: 'Modern engineering stack, premium tooling, and performance hardware.' },
  { icon: Star, title: 'Bonus and Referrals', desc: 'Performance-based incentives and strong referral recognition.' },
  { icon: Shield, title: 'Equal Opportunities', desc: 'Inclusive environment focused on merit and capability.' },
  { icon: Presentation, title: 'Client Demo Exposure', desc: 'Present your work in strategic demos and stakeholder sessions.' },
  { icon: FileText, title: 'Interview & Portfolio Support', desc: 'Guided portfolio reviews and interview preparation support.' }
];

const roles = [
  { role: 'Full Stack Developer', meta: 'Pune · Hybrid · Full-time', dept: 'Engineering', desc: 'Build robust web products across frontend and backend services while collaborating with product and design teams.' },
  { role: 'AI/ML Engineer', meta: 'Pune · Hybrid · Full-time', dept: 'AI & Data', desc: 'Design and deploy machine learning pipelines for production-grade business applications.' },
  { role: 'DevOps Engineer', meta: 'Remote · Full-time', dept: 'Infrastructure', desc: 'Own release automation, cloud architecture reliability, and observability at scale.' },
  { role: 'UI/UX Designer', meta: 'Pune · Hybrid · Full-time', dept: 'Design', desc: 'Craft high-impact product experiences with strong visual systems and usability-first thinking.' },
  { role: 'QA Automation Engineer', meta: 'Remote · Full-time', dept: 'Quality', desc: 'Build resilient quality pipelines and automation suites for reliable product delivery.' },
  { role: 'HR & Talent Specialist', meta: 'Pune · On-site · Full-time', dept: 'HR', desc: 'Drive talent strategy, hiring operations, and growth frameworks across business units.' }
];

function Careers() {
  const [openRole, setOpenRole] = useState(0);
  const [selectedRole, setSelectedRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const options = useMemo(() => [...roles.map((item) => item.role), 'SCIP Program', 'General Application'], []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const applyFor = (role) => {
    setSelectedRole(role);
    scrollToSection('apply');
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="careers-page">
      <section className="careers-hero page-section reveal">
        <div className="container careers-hero-grid">
          <div>
            <h1>Innovate, Belong, And Thrive</h1>
            <p>Bring your whole self to a team that believes in you.</p>
            <div className="hero-actions">
              <button type="button" className="btn-primary" onClick={() => scrollToSection('open-positions')}>
                View Open Positions
              </button>
              <button type="button" className="btn-secondary" onClick={() => scrollToSection('scip')}>
                Learn About SCIP
              </button>
            </div>
          </div>
          <div className="hero-stats">
            <article>30+ <span>Engineers</span></article>
            <article>50+ <span>Products shipped</span></article>
            <article>100% <span>Live project exposure</span></article>
          </div>
        </div>
      </section>

      <section className="perks-section page-section reveal">
        <div className="container">
          <div className="perks-head">
            <div>
              <span className="eyebrow">Perks and Benefits</span>
              <h2>
                Perks and <span className="gradient-text">Benefits</span>
              </h2>
            </div>
            <p>
              We invest in people, not just roles. From mentored growth to modern tooling, every
              part of your journey is designed for meaningful progress.
            </p>
          </div>
          <div className="perks-tags">
            {['Mentor-led reviews', 'Live client projects', 'Interview support', 'Demo-day exposure', 'Performance recognition', 'Flexible timings'].map((tag) => (
              <button type="button" key={tag}>{tag}</button>
            ))}
          </div>
          <div className="perks-masonry">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <article key={perk.title} className={`perk-card ${[1, 4, 7, 10].includes(index) ? 'perk-card--tall' : ''}`}>
                  <Icon size={40} />
                  <h3>{perk.title}</h3>
                  <p>{perk.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="positions-section page-section reveal" id="open-positions">
        <div className="container">
          <h2>Open Positions</h2>
          <p>Find your role in a team that ships real software with real impact.</p>
          <div className="positions-list">
            {roles.map((item, index) => (
              <article key={item.role} className="position-card">
                <button type="button" className="position-head" onClick={() => setOpenRole(openRole === index ? -1 : index)}>
                  <div>
                    <span>{item.dept}</span>
                    <h3>{item.role}</h3>
                    <p>{item.meta}</p>
                  </div>
                  <ChevronDown className={openRole === index ? 'open' : ''} />
                </button>
                {openRole === index && (
                  <div className="position-body">
                    <p>{item.desc}</p>
                    <button type="button" className="btn-primary" onClick={() => applyFor(item.role)}>
                      Apply Now →
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scip-section page-section reveal" id="scip">
        <div className="container">
          <span className="scip-badge">EXCLUSIVE PROGRAM</span>
          <h2>SCIP — Specialized Corporate Incubation Program</h2>
          <h3>We don&apos;t just hire. We build careers from the ground up.</h3>
          <p className="scip-desc">
            SCIP is GravityTech&apos;s flagship talent development initiative. We hire driven
            individuals — freshers, career switchers, and early-stage professionals — and put them
            through an intensive, job-oriented training program. Every SCIP participant works on
            live client projects from day one, building a real portfolio under expert mentorship.
          </p>

          <div className="scip-timeline">
            <div className="line" />
            {[{ icon: Search, title: 'Selective Hiring', text: 'We identify raw talent — aptitude, problem-solving, and drive matter more than years of experience.' }, { icon: BookOpen, title: 'Job-Oriented Training', text: '8–12 weeks of structured domain training with daily reviews, mentored sprints, and real deliverables.' }, { icon: Rocket, title: 'Live Project Deployment', text: 'You work on real client projects from week 3. No dummy projects. Real responsibility. Real impact.' }].map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title}>
                  <div className="node"><Icon size={20} /></div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>

          <div className="scip-benefits">
            {['Guaranteed live project exposure', 'Mentorship from senior engineers', 'Portfolio-ready by program end', 'Job placement assistance', 'Certification upon completion', 'Pathway to full-time role at GravityTech'].map((benefit) => (
              <article key={benefit}>{benefit}</article>
            ))}
          </div>

          <button type="button" className="btn-primary" onClick={() => applyFor('SCIP Program')}>
            Apply for SCIP →
          </button>
          <p className="scip-note">SCIP runs in quarterly cohorts. Next batch: Q3 2026</p>
        </div>
      </section>

      <section className="apply-section page-section reveal" id="apply">
        <div className="container apply-grid">
          <div>
            <span className="eyebrow">Apply Now</span>
            <h2>Tell Us About Yourself</h2>
            <p>Our talent team responds within a few business days.</p>
            <div className="apply-chips">
              <span>⚡ Fast response</span>
              <span>🌐 Remote-friendly</span>
              <span>🎓 Freshers welcome</span>
            </div>
          </div>
          <div className="apply-panel">
            {submitted ? (
              <div className="success-state">
                <CheckCircle2 size={42} />
                <h3>Application Received!</h3>
                <p>Thanks for applying. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={submitForm}>
                <input required type="text" placeholder="Full Name" />
                <input required type="email" placeholder="Email" />
                <input required type="tel" placeholder="Phone" />
                <select required value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                  <option value="">Role Applying For</option>
                  {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <input required type="url" placeholder="LinkedIn / Portfolio URL" />
                <textarea required rows="4" placeholder="Why GravityTech?" />
                <button className="btn-primary" type="submit">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
