import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { categoryIcons, categoryLabels, projectData } from "../../data.js";
import { Icon } from "../../utils/icons.jsx";

const projectTracks = ["all", "java", "python", "analytics", "web"];

const categoryGradients = {
  java: "linear-gradient(135deg, #29d6e0 0%, #1f9fd8 100%)",
  python: "linear-gradient(135deg, #6a5cf5 0%, #8b3df0 100%)",
  analytics: "linear-gradient(135deg, #84cc16 0%, #22c55e 100%)",
  web: "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const projects = useMemo(
    () =>
      activeFilter === "all"
        ? projectData
        : projectData.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <AnimatedSection id="projects" className="section section-porto-muted">
      <div className="container">
        <SectionHeading
          eyebrow="Our portfolio"
          title="Project tracks built for real delivery."
          center
          porto
        >
          Filter project ideas by technology. Each track can be customized for client requirements,
          internships, and career portfolios.
        </SectionHeading>

        <div className="porto-filter-bar" role="tablist" aria-label="Project technology filters">
          {projectTracks.map((track) => (
            <button
              className={`porto-filter-button ${activeFilter === track ? "active" : ""}`}
              key={track}
              type="button"
              onClick={() => setActiveFilter(track)}
            >
              {categoryLabels[track]}
            </button>
          ))}
        </div>

        <div className="porto-portfolio-grid">
          {projects.map((project, index) => (
            <motion.article
              className="porto-portfolio-card"
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25) }}
            >
              <div
                className="porto-portfolio-thumb"
                style={{ background: categoryGradients[project.category] }}
              >
                <Icon name={categoryIcons[project.category]} size={34} />
                <span>{categoryLabels[project.category]}</span>
              </div>
              <div className="porto-portfolio-overlay">
                <p className="porto-portfolio-tag">{project.level}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="porto-portfolio-meta">
                  <span>{project.timeline}</span>
                  {project.skills.slice(0, 3).map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
