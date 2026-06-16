import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection.jsx';

const steps = [
  {
    label: 'Step 01',
    title: 'Assessment + Discovery',
    description: 'We map your strengths and learning priorities to a focused delivery track.'
  },
  {
    label: 'Step 02',
    title: 'Mentored Project Sprint',
    description: 'You build production-style modules with weekly reviews from senior engineers.'
  },
  {
    label: 'Step 03',
    title: 'Portfolio + Placement Support',
    description: 'Ship your case study, improve interviews, and prepare for role transitions.'
  }
];

const benefits = ['Real client-style projects', 'Weekly mentor code reviews', 'Outcome-driven portfolio prep'];

export default function ProgramHighlights() {
  return (
    <AnimatedSection className="section section-dark scip-section">
      <div className="container">
        <span className="scip-badge">Exclusive Program</span>
        <h2>
          GravityTech SCIP for <span className="text-gradient">career acceleration</span>
        </h2>
        <p className="scip-intro">
          Structured Career Immersion Program designed for candidates who want practical engineering
          confidence and real project execution discipline.
        </p>

        <div className="scip-timeline" role="list" aria-label="SCIP journey timeline">
          {steps.map((step) => (
            <article className="scip-step" key={step.title} role="listitem">
              <span className="scip-node" aria-hidden="true" />
              <p className="scip-step-label">{step.label}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="scip-benefits">
          {benefits.map((benefit) => (
            <article className="scip-benefit" key={benefit}>
              <CheckCircle2 size={18} />
              <p>{benefit}</p>
            </article>
          ))}
        </div>

        <a className="button scip-cta" href="#apply">
          Apply for SCIP <ArrowUpRight size={18} />
        </a>
      </div>
    </AnimatedSection>
  );
}
