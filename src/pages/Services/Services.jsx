import { useEffect } from 'react';
import { Building2, UserSearch, Users2, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    id: 'crm',
    icon: <Users2 size={36} />,
    title: 'CRM Solutions',
    description:
      'Custom CRM platforms built for sales teams, relationship managers, and enterprise pipelines. AI-assisted lead scoring, pipeline automation, and real-time analytics dashboards.',
    features: [
      'Lead & Contact Management',
      'Pipeline Automation',
      'AI-Powered Insights',
      'Multi-channel Integration',
      'Custom Reporting'
    ]
  },
  {
    id: 'talent',
    icon: <UserSearch size={36} />,
    title: 'Talent Acquisition Platform',
    description:
      'End-to-end recruitment technology — from job posting and AI resume screening to interview scheduling and onboarding workflows. Built for HR teams that move fast.',
    features: [
      'AI Resume Screening',
      'Automated Interview Scheduling',
      'Candidate Pipeline Tracking',
      'Onboarding Automation',
      'Analytics & Compliance'
    ]
  },
  {
    id: 'enterprise',
    icon: <Building2 size={36} />,
    title: 'Enterprise Solutions',
    description:
      'Large-scale enterprise software — ERP integrations, workflow automation, cross-department portals, and custom enterprise platforms engineered for scale and security.',
    features: [
      'ERP & System Integration',
      'Workflow Automation',
      'Role-Based Access Control',
      'Audit & Compliance Modules',
      'Scalable Cloud Architecture'
    ]
  },
  {
    id: 'payroll',
    icon: <Wallet size={36} />,
    title: 'Third Party Payroll',
    description:
      'Fully managed payroll processing for enterprises using third-party vendors — compliance, statutory filings, salary disbursement, and real-time payroll reporting all in one platform.',
    features: [
      'Multi-vendor Payroll Processing',
      'Statutory Compliance (PF, ESI, TDS)',
      'Salary Slip Automation',
      'Real-time Payroll Dashboard',
      'Year-end Filing Support'
    ]
  }
];

function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card');
    const onMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const rotateX = ((event.clientY - rect.top - rect.height / 2) / rect.height) * -8;
      const rotateY = ((event.clientX - rect.left - rect.width / 2) / rect.width) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const onLeave = (event) => {
      event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <div className="services-page">
      <section className="services-hero fade-up">
        <div className="mesh-aurora" />
        <div className="section-wrap">
          <h1>Enterprise Software Solutions</h1>
          <p>
            From customer lifecycle systems to compliance-heavy enterprise modules, we design and
            deploy resilient digital platforms that evolve with your business.
          </p>
        </div>
      </section>

      <section className="service-list fade-up">
        <div className="section-wrap">
          {services.map((service, index) => (
            <article
              className={`service-row ${index % 2 === 1 ? 'reverse' : ''}`}
              id={service.id}
              key={service.title}
            >
              <div className="service-icon-panel glass-card tilt-card">
                {service.icon}
                <span className="tech-tag">{service.title}</span>
              </div>
              <div className="service-content glass-card">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link to="/careers#apply" className="glow-button">
                  Get Started
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-bottom-cta fade-up">
        <div className="section-wrap glass-card">
          <h2>Have a custom requirement? Let's talk →</h2>
          <Link className="glow-button" to="/careers#apply">
            Start Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
