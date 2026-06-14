import { useMemo, useState } from "react";
import { Check, Plus, RotateCcw, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AnimatedBackground from "../components/AnimatedBackground.jsx";
import { jobOpenings } from "../data.js";
import { routes } from "../routes.js";

const areas = ["All", ...Array.from(new Set(jobOpenings.map((job) => job.area)))];
const jobTypes = ["All", ...Array.from(new Set(jobOpenings.map((job) => job.type)))];
const experiences = ["All", ...Array.from(new Set(jobOpenings.map((job) => job.experience)))];

export default function JobOpeningsPage() {
  const [area, setArea] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [experience, setExperience] = useState("All");
  const [search, setSearch] = useState("");
  const [openFilter, setOpenFilter] = useState("area");

  const filterGroups = [
    { id: "area", label: "Areas of Interest", value: area, options: areas, onChange: setArea },
    { id: "type", label: "Job Type", value: jobType, options: jobTypes, onChange: setJobType },
    {
      id: "experience",
      label: "Experience",
      value: experience,
      options: experiences,
      onChange: setExperience,
    },
  ];

  const filteredJobs = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return jobOpenings.filter((job) => {
      const matchesArea = area === "All" || job.area === area;
      const matchesType = jobType === "All" || job.type === jobType;
      const matchesExperience = experience === "All" || job.experience === experience;
      const searchableText = [job.title, job.area, job.type, job.location, ...job.skills]
        .join(" ")
        .toLowerCase();
      const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch);

      return matchesArea && matchesType && matchesExperience && matchesSearch;
    });
  }, [area, experience, jobType, search]);

  const hasActiveFilters =
    area !== "All" || jobType !== "All" || experience !== "All" || search.trim().length > 0;

  const resetFilters = () => {
    setArea("All");
    setJobType("All");
    setExperience("All");
    setSearch("");
    setOpenFilter("area");
  };

  return (
    <>
      <Header page="jobs" />
      <main>
        <section className="jobs-hero section">
          <AnimatedBackground variant="career" />
          <div className="container jobs-hero-grid">
            <div>
              <p className="eyebrow pulse-label">Job opportunities</p>
              <h1>Job Openings</h1>
            </div>
            <p>
              Bring your skills to real client-style project work. Choose a technical field, explore
              the role, and apply for the opportunity that matches your career direction.
            </p>
          </div>
        </section>

        <section className="jobs-board section section-muted">
          <div className="container jobs-layout">
            <aside className="jobs-filter-panel glass-card" aria-label="Job filters">
              <div className="jobs-filter-intro">
                <h2>Filters</h2>
                <p>Open a filter, choose one option, and the job list updates instantly.</p>
              </div>
              {filterGroups.map((filter) => (
                <FilterDropdown
                  key={filter.id}
                  label={filter.label}
                  value={filter.value}
                  options={filter.options}
                  isOpen={openFilter === filter.id}
                  onToggle={() => setOpenFilter((current) => (current === filter.id ? "" : filter.id))}
                  onChange={(nextValue) => {
                    filter.onChange(nextValue);
                    setOpenFilter("");
                  }}
                />
              ))}
              {hasActiveFilters ? (
                <button className="button button-secondary button-small jobs-reset" type="button" onClick={resetFilters}>
                  Reset filters <RotateCcw size={16} />
                </button>
              ) : null}
            </aside>

            <div className="jobs-results">
              <div className="jobs-results-header">
                <p>{filteredJobs.length} job results</p>
                <label className="job-search">
                  <span className="sr-only">Search job openings</span>
                  <input
                    type="search"
                    placeholder="Search by title, skill, or location"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                  <Search size={20} />
                </label>
              </div>

              <div className="job-card-list">
                {filteredJobs.length === 0 ? (
                  <article className="job-card glass-card">
                    <h2>No matching openings found.</h2>
                    <p>Try changing the filters or search term.</p>
                  </article>
                ) : (
                  filteredJobs.map((job) => <JobCard job={job} key={job.title} />)
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer
        description="Explore real-time GravityTech project opportunities across modern technical fields."
        links={[
          { href: routes.careers, label: "Careers" },
          { href: `${routes.home}#projects`, label: "Projects" },
          { href: `${routes.home}#clients`, label: "Clients" },
          { href: `${routes.careers}#apply`, label: "Apply" },
        ]}
        heading="Open fields"
        tracks={["Java", "Python", "React", "Data Analytics"]}
      />
    </>
  );
}

function FilterDropdown({ label, value, options, isOpen, onToggle, onChange }) {
  return (
    <div className={`job-filter ${isOpen ? "open" : ""}`}>
      <button className="job-filter-trigger" type="button" aria-expanded={isOpen} onClick={onToggle}>
        <span className="job-filter-copy">
          <span className="job-filter-label">{label}</span>
          <strong>{value}</strong>
        </span>
        <span className="job-filter-icon" aria-hidden="true">
          <Plus size={18} />
        </span>
      </button>
      {isOpen ? (
        <div className="job-filter-options" role="listbox" aria-label={label}>
          {options.map((option) => (
            <button
              className={`job-filter-option ${option === value ? "active" : ""}`}
              key={option}
              type="button"
              onClick={() => onChange(option)}
            >
              <span>{option}</span>
              {option === value ? <Check size={16} /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function JobCard({ job }) {
  return (
    <article className="job-card glass-card">
      <div className="job-card-top">
        <div>
          <p className="job-area">{job.area}</p>
          <h2>{job.title}</h2>
        </div>
        <Link className="button button-small" to={`${routes.careers}#apply`}>
          Apply Now
        </Link>
      </div>
      <div className="job-pills">
        <span>{job.type}</span>
        <span>Experience: {job.experience}</span>
        <span>Location: {job.location}</span>
      </div>
      <div className="job-skills">
        <p>Required skills</p>
        <span>{job.skills.join(", ")}</span>
      </div>
      <p>{job.description}</p>
      <Link className="read-more-link" to={`${routes.careers}#apply`}>
        Read more +
      </Link>
    </article>
  );
}
