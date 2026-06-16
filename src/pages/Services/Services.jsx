import { useEffect } from 'react';
import { Building2, UserSearch, Users2, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    number: '01',
    title: 'CRM Solutions',
    icon: Users2,
    description:
      'Custom CRM platforms built for sales pipelines, relationship management, and enterprise growth.',
    features: ['Lead & Contact Management', 'Pipeline Automation', 'AI-Powered Insights', 'Multi-channel Integration', 'Custom Reporting']
  },
  {
    number: '02',
    title: 'Talent Acquisition',
    icon: UserSearch,
    description:
      'End-to-end recruitment technology from sourcing to onboarding, designed for high-speed hiring teams.',
    features: ['AI Resume Screening', 'Automated Interview Scheduling', 'Candidate Pipeline Tracking', 'Onboarding Automation', 'Analytics & Compliance']
  },
  {
    number: '03',
    title: 'Enterprise Solutions',
    icon: Building2,
    description:
      'Large-scale enterprise systems combining workflow orchestration, integrations, and role-secure operations.',
    features: ['ERP & System Integration', 'Workflow Automation', 'Role-Based Access Control', 'Audit & Compliance', 'Scalable Cloud Architecture']
  },
  {
    number: '04',
    title: 'Third Party Payroll',
    icon: Wallet,
    description:
      'Compliance-first payroll management with reporting, disbursement, and statutory workflows at scale.',
    features: ['Multi-vendor Payroll Processing', 'Statutory Compliance (PF, ESI, TDS)', 'Salary Slip Automation', 'Real-time Dashboard', 'Year-end Filing']
  }
];

function Services() {
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
    <div className="services-page">
      <section className="services-hero page-section reveal">
        <div className="container">
          <h1>Enterprise IT Services Built for Scale</h1>
          <p>Four core capabilities. One delivery partner.</p>
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <section className="service-detail page-section reveal" key={service.title}>
            <div className={`container service-row ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-visual">
                <div className="service-glow" />
                <Icon size={80} />
              </div>
              <div className="service-text">
                <span>{service.number}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link className="btn-primary" to="/careers">
                  Get Started →
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <section className="services-cta page-section reveal">
        <div className="container">
          <h2>Have a custom requirement?</h2>
          <Link className="btn-primary" to="/careers">
            Let's Talk →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
