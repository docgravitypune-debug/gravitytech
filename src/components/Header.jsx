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

  const links = [
    { to: routes.services, label: "Services" },
    { to: routes.about, label: "About" },
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
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={link.to}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="button button-secondary button-small nav-cta nav-cta-mobile" to={routes.contact} onClick={closeMenu}>
            Let&apos;s Talk!
          </Link>
        </div>
        <Link className="button button-secondary button-small nav-cta nav-cta-desktop" to={routes.contact}>
          Let&apos;s Talk!
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
