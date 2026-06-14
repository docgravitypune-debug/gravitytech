import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Brand from "./Brand.jsx";
import { routes } from "../routes.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const isHome = location.pathname === routes.home;
  const ctaLabel = isHome ? "Start a Project" : "Hire Us";
  const links = [
    { to: `${routes.home}#services`, label: "Services" },
    { to: `${routes.home}#projects`, label: "Projects" },
    { to: routes.about, label: "About" },
    { to: `${routes.home}#clients`, label: "Clients" },
    { to: routes.jobs, label: "Openings" },
    { to: `${routes.careers}#reviews`, label: "Reviews" },
    { to: routes.careers, label: "Careers" },
  ];

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <Brand href={routes.home} size={66} />
        <div className={`nav-center ${isOpen ? "open" : ""}`}>
          <ul id="primary-menu" className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  className={({ isActive }) => (isActive && !link.to.includes("#") ? "active" : "")}
                  to={link.to}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="button button-secondary button-small nav-cta nav-cta-mobile" to={`${routes.home}#contact`} onClick={closeMenu}>
            {ctaLabel}
          </Link>
        </div>
        <Link className="button button-secondary button-small nav-cta nav-cta-desktop" to={`${routes.home}#contact`}>
          {ctaLabel}
        </Link>
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
      </nav>
    </header>
  );
}
