import { useEffect, useMemo, useState } from 'react';
import { Cpu, Layers, Server, Users, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const partners = ['NimbusCare', 'FinEdge', 'Veltrix', 'Orbixa', 'Northbay', 'Quanta', 'Harborline', 'Crestwave', 'Polaris', 'Medivue'];

const valueCards = [
  { icon: Layers, title: 'Define The Right Technology Roadmap', text: 'Align architecture, delivery, and outcomes around a roadmap that reduces risk and accelerates execution.' },
  { icon: Server, title: 'Build Scalable Software Foundations', text: 'Engineer systems for growth with resilient platforms, observability, and maintainable service boundaries.' },
  { icon: Users, title: 'Grow Talent From Within', text: 'Create a high-performance delivery engine with mentored teams, structured onboarding, and live project ownership.' },
  { icon: Wallet, title: 'Automate Payroll & Compliance', text: 'Eliminate payroll bottlenecks through integrated compliance workflows and real-time operational visibility.' },
  { icon: Cpu, title: 'Integrate AI Where It Matters', text: 'Deploy AI in high-impact operational layers with clear KPIs, measurable gains, and production-grade governance.' }
];

const methodology = [
  { number: '01', title: 'Discovery & Scoping', text: 'We align goals, technology constraints, and business priorities into a realistic delivery plan.' },
  { number: '02', title: 'Design & Architecture', text: 'System design, data strategy, and technical architecture are validated before engineering starts.' },
  { number: '03', title: 'Agile Delivery', text: 'Cross-functional squads deliver in iterative sprints with full transparency and measurable velocity.' },
  { number: '04', title: 'Launch & Support', text: 'We harden, launch, monitor, and continuously improve systems in real production environments.' }
];

const serviceTabs = [
  {
    name: 'CRM Solutions',
    description:
      'Custom CRM platforms built for sales pipelines, relationship management, and enterprise growth. AI-assisted lead scoring, pipeline automation, and real-time dashboards.'
  },
  {
    name: 'Talent Acquisition',
    description:
      'End-to-end recruitment technology from job posting to onboarding. AI resume screening, automated scheduling, and candidate pipeline tracking built for HR teams that move fast.'
  },
  {
    name: 'Enterprise Solutions',
    description:
      'Large-scale enterprise software — ERP integrations, workflow automation, cross-department portals engineered for scale, security, and long-term maintainability.'
  },
  {
    name: 'Third Party Payroll',
    description:
      'Fully managed payroll processing — compliance, statutory filings, salary disbursement, and real-time payroll reporting across multi-vendor environments.'
  }
];

const impactStats = [
  '68% — Projects moved to active execution in <90 days',
  '100% — Clients have live delivery tracking',
  '95% — Teams report improved delivery speed after 90 days'
];

const testimonials = [
  {
    quote: 'GravityTech gave us clarity, speed, and structure. We moved from fragmented tools to a cohesive enterprise platform in one quarter.',
    name: 'Aarti Menon — VP Technology, FinEdge'
  },
  {
    quote: 'Their engineering team felt like an extension of ours. Release cycles improved and visibility across squads became effortless.',
    name: 'Kunal Prabhu — Product Director, Northbay'
  },
  {
    quote: 'From hiring workflows to payroll automation, GravityTech helped us streamline operations across business-critical systems.',
    name: 'Rhea Kapoor — COO, NimbusCare'
  },
  {
    quote: 'The mix of architectural rigor and execution discipline is rare. GravityTech consistently delivered against high-stakes timelines.',
    name: 'Vikram Sethi — Founder, Orbixa'
  }
];

const insights = [
  'Why Delivery Velocity Fails Even With Great Teams',
  'Designing AI Features That Actually Reach Production',
  'A Practical Blueprint For Modern CRM Transformations',
  'How To Scale Engineering Without Growing Technical Debt',
  'What Great Talent Incubation Looks Like In IT Services',
  'Payroll Automation: Compliance-First Architecture Patterns'
];

function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll('.reveal');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, []);

  const partnerLoop = useMemo(() => [...partners, ...partners], []);
  const impactLoop = useMemo(() => [...impactStats, ...impactStats], []);

  return (
    <div className="home-page">
      <section className="home-hero page-section">
        <div className="container reveal">
          <h1>IT Services Partner for Growing Enterprises</h1>
          <p>
            Deliver software, grow talent, and run payroll — with GravityTech as your end-to-end
            technology partner.
          </p>
          <Link to="/careers" className="btn-primary">
            Start a Project →
          </Link>
          <span className="hero-trust">Trusted By Businesses Across Industries</span>

          <div className="marquee-wrap home-marquee">
            <div className="marquee-track">
              {partnerLoop.map((name, index) => (
                <span key={`${name}-${index}`}>{name}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-separator" />
      </section>

      <section className="problem-section page-section reveal">
        <div className="container">
          <div className="problem-head">
            <h2>
              Software Delivery Has a
              <br />
              <span className="gradient-text">Speed Problem</span>
            </h2>
            <p>
              Most transformation delays are not caused by ambition—they are caused by disconnected
              execution, fragmented ownership, and systems that fail to scale with demand.
            </p>
          </div>
          <div className="problem-stats">
            <article>
              <span>SLOW DELIVERY</span>
              <h3>73%</h3>
              <p>Organizations report delayed releases due to unresolved engineering bottlenecks.</p>
            </article>
            <article>
              <span>UNREALIZED AUTOMATION</span>
              <h3>8%</h3>
              <p>Only a fraction of teams fully realize the ROI of digital automation initiatives.</p>
            </article>
            <article>
              <span>TECHNICAL DEBT</span>
              <h3>64%</h3>
              <p>Delivery pipelines slow down when legacy systems block iterative product progress.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="vision-section page-section reveal">
        <div className="container vision-grid">
          <div className="vision-orb" />
          <div>
            <span className="eyebrow">The Platform Is Already Built.</span>
            <h2>Now Build the Business That Runs on It.</h2>
            <p>
              Software teams struggle when <strong>direction is unclear</strong>, delivery is slow,
              and systems can&apos;t scale.
            </p>
            <p>
              GravityTech fixes the execution gap — <strong>strategy, engineering, talent, and
              payroll</strong> — built for businesses that move fast.
            </p>
            <Link to="/careers" className="btn-primary">
              Start a Project →
            </Link>
          </div>
        </div>
      </section>

      <section className="value-section page-section reveal">
        <div className="container">
          <div className="value-head">
            <h2>Convert Your Technology Investment Into Measurable Value</h2>
            <p>
              What looks like a software problem is often an execution problem in disguise.
            </p>
          </div>

          <div className="value-cards">
            {valueCards.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={26} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link to="/services">Read More +</Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="method-section page-section reveal">
        <div className="container">
          <h2>How GravityTech Delivers From Strategy to Execution</h2>
          <div className="method-grid">
            {methodology.map((step, index) => (
              <article key={step.number} className={index === 0 ? 'first' : index === 3 ? 'last' : ''}>
                <div className="method-num">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tab-section page-section reveal">
        <div className="container tab-grid">
          <div>
            <h2>
              Explore Our
              <br />
              <span className="gradient-text">IT Services</span>
            </h2>
          </div>
          <div className="tab-content-wrap">
            <div className="tab-visual">
              <span>{String(activeTab + 1).padStart(2, '0')}/04</span>
            </div>
            <div className="tab-content">
              <small>{String(activeTab + 1).padStart(2, '0')}/04</small>
              <h3>{serviceTabs[activeTab].name}</h3>
              <p>{serviceTabs[activeTab].description}</p>
              <Link to="/services" className="btn-primary">
                Know More →
              </Link>
              <div className="tab-list">
                {serviceTabs.map((tab, idx) => (
                  <button
                    key={tab.name}
                    type="button"
                    className={idx === activeTab ? 'active' : ''}
                    onClick={() => setActiveTab(idx)}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-section page-section reveal">
        <div className="container">
          <h2>How Our Clients Have Seen Results</h2>
          <div className="marquee-wrap">
            <div className="marquee-track impact-track">
              {impactLoop.map((stat, index) => (
                <article key={`${stat}-${index}`}>{stat}</article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section page-section reveal">
        <div className="container">
          <span className="eyebrow">What Our Clients Say</span>
          <h2>{testimonials[activeTestimonial].quote}</h2>
          <p>{testimonials[activeTestimonial].name}</p>
          <div className="testimonial-avatars">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={idx === activeTestimonial ? 'active' : ''}
                onClick={() => setActiveTestimonial(idx)}
                aria-label={`testimonial ${idx + 1}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="insights-section page-section reveal">
        <div className="container">
          <div className="insights-head">
            <h2>Ideas From The GravityTech Team</h2>
            <p>Notes on software engineering, talent, and building products that last.</p>
          </div>
          <div className="insights-grid">
            {insights.map((title, idx) => (
              <article key={title}>
                <h3>{title}</h3>
                <span className="tags">Engineering · Delivery · Strategy</span>
                <div className="author-row">
                  <div className="avatar">GT</div>
                  <div>
                    <strong>GravityTech Editorial</strong>
                    <p>Jun {10 + idx}, 2026 · 6 min read</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="insight-cta">
            <Link to="/about">Read More Insights →</Link>
          </div>
        </div>
      </section>

      <section className="home-final-cta page-section reveal">
        <div className="container">
          <h2>Ready to Build Something Extraordinary?</h2>
          <Link to="/careers" className="btn-primary">
            Let's Talk →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
