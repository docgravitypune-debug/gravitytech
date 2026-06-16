import { BookOpen, CheckCircle2, Rocket, Search } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection.jsx';
import { careerHighlights } from '../../data.js';

const timeline = [
  {
    icon: Search,
    title: 'Selective Hiring',
    text: 'We identify raw talent — aptitude, problem-solving, and drive matter more than years of experience.'
  },
  {
    icon: BookOpen,
    title: 'Job-Oriented Training',
    text: '8–12 weeks of structured domain training with daily reviews, mentored sprints, and real deliverables.'
  },
  {
    icon: Rocket,
    title: 'Live Project Deployment',
    text: 'You work on real client projects from week 3. No dummy projects. Real responsibility. Real impact.'
  }
];

export default function ProgramHighlights() {
  return (
    <AnimatedSection id="scip" className="section section-dark program-highlights scip-section">
      <div className="container learning-grid">
        <div>
          <span className="scip-badge">EXCLUSIVE PROGRAM</span>
          <h2>SCIP — Specialized Corporate Incubation Program</h2>
          <p>
            SCIP is GravityTech&apos;s flagship talent development initiative. We hire driven
            individuals — freshers, career switchers, and early-stage professionals — and put them
            through an intensive, job-oriented training program.
          </p>
          <p>
            Every SCIP participant works on live client projects from day one, building a real
            portfolio under expert mentorship.
          </p>
        </div>

        <div>
          <div className="scip-timeline">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <article className="scip-step" key={item.title}>
                  <div className="scip-node">
                    <Icon size={20} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="highlight-list scip-benefits-grid">
            {careerHighlights.map((highlight) => (
              <article key={highlight.title}>
                <CheckCircle2 size={18} />
                <div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="button scip-cta" href="#apply">
            Apply for SCIP →
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
