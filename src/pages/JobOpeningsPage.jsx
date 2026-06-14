import { useMemo, useState } from "react";
import { Search } from "lucide-react";
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
            <aside className="jobs-filter-panel" aria-label="Job filters">
              <h2>Filters</h2>
              <FilterSelect label="Areas of Interest" value={area} options={areas} onChange={setArea} />
              <FilterSelect label="Job Type" value={jobType} options={jobTypes} onChange={setJobType} />
              <FilterSelect
                label="Experience"
                value={experience}
                options={experiences}
                onChange={setExperience}
              />
            </aside>

            <div className="jobs-results">
              <div className="jobs-results-header">
                <p>{filteredJobs.length} job results</p>
                <label className="job-search">
                  <span className="sr-only">Search job openings</span>
                  <input
                    type="search"
                    placeholder="Search for opening..."
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

function FilterSelect({ label, value, options, onChange }) {
  return (
    <label className="job-filter">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
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
