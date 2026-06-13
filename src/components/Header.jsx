import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "./Brand.jsx";

export default function Header({ page }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const links =
    page === "careers" || page === "jobs"
      ? [
          { href: "index.html#services", label: "Services" },
          { href: "index.html#projects", label: "Projects" },
          { href: "index.html#clients", label: "Clients" },
          { href: "job-openings.html", label: "Openings" },
          { href: "#reviews", label: "Reviews" },
          { href: "careers.html#apply", label: "Apply" },
        ]
      : [
          { href: "#services", label: "Services" },
          { href: "#projects", label: "Projects" },
          { href: "#process", label: "Process" },
          { href: "#clients", label: "Clients" },
          { href: "#reviews", label: "Reviews" },
          { href: "careers.html", label: "Careers" },
        ];

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <Brand href="index.html" size={54} />
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <ul id="primary-menu" className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="button button-small"
              href={page === "careers" || page === "jobs" ? "index.html#contact" : "#contact"}
              onClick={closeMenu}
            >
              {page === "careers" || page === "jobs" ? "Hire Us" : "Start a Project"}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
