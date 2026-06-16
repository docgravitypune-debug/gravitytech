import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import './Navbar.css';

const serviceLinks = [
  { label: 'CRM Solutions', to: '/services#crm' },
  { label: 'Talent Acquisition Platform', to: '/services#talent' },
  { label: 'Enterprise Solutions', to: '/services#enterprise' },
  { label: 'Third Party Payroll', to: '/services#payroll' }
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="navbar-shell">
      <nav className="navbar glass-card">
        <Link to="/" className="navbar-logo" onClick={closeMenus}>
          <img src={logo} alt="GravityTech Software" />
          <span>GravityTech</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-links ${mobileOpen ? 'is-open' : ''}`}>
          <NavLink to="/" onClick={closeMenus}>
            Home
          </NavLink>

          <div
            className="services-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="services-trigger"
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              Services <ChevronDown size={16} />
            </button>
            <div className={`dropdown-menu glass-card ${servicesOpen ? 'is-open' : ''}`}>
              {serviceLinks.map((service) => (
                <Link key={service.label} to={service.to} onClick={closeMenus}>
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/about" onClick={closeMenus}>
            About
          </NavLink>
          <NavLink to="/careers" onClick={closeMenus}>
            Careers
          </NavLink>
        </div>

        <Link to="/careers#apply" className="glow-button nav-cta" onClick={closeMenus}>
          Let's Talk
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
