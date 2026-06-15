import { useMemo, useState } from "react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { categoryLabels, projectData } from "../../data.js";

const projectTracks = ["all", "java", "python", "analytics", "web"];

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
    <AnimatedSection id="projects" className="pro-section pro-projects">
      <div className="container">
        <ProSectionHeading
          eyebrow="Project catalog"
          title="Tracks designed for client delivery and career portfolios."
          center
        >
          Filter by technology to explore modules that can be customized for internships,
          capstones, and enterprise requirements.
        </ProSectionHeading>

        <div className="pro-filter-bar" role="tablist" aria-label="Project technology filters">
          {projectTracks.map((track) => (
            <button
              className={activeFilter === track ? "active" : ""}
              key={track}
              type="button"
              onClick={() => setActiveFilter(track)}
            >
              {categoryLabels[track]}
            </button>
          ))}
        </div>

        <div className="pro-project-grid">
          {projects.map((project) => (
            <article className="pro-project-card" key={project.title}>
              <div className="pro-project-top">
                <span>{categoryLabels[project.category]}</span>
                <span>{project.level}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="pro-project-meta">
                <span>{project.timeline}</span>
                {project.skills.slice(0, 3).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
