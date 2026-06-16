import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import './Navbar.css';

const dropdownItems = [
  { label: 'CRM Solutions', to: '/services' },
  { label: 'Talent Acquisition', to: '/services' },
  { label: 'Enterprise Solutions', to: '/services' },
  { label: 'Third Party Payroll', to: '/services' }
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const closeAll = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  const servicesActive = location.pathname === '/services';

  return (
    <header className="nav-wrap">
      <nav className="nav-pill">
        <Link to="/" className="nav-logo" onClick={closeAll}>
          <img src={logo} alt="GravityTech" />
          <span>GravityTech</span>
        </Link>

        <button className="nav-menu-btn" onClick={() => setMobileOpen((v) => !v)} type="button" aria-label="menu">
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className={`nav-center ${mobileOpen ? 'open' : ''}`}>
          <div className="nav-dropdown" onMouseLeave={() => setDropdownOpen(false)}>
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger ${servicesActive ? 'active' : ''}`}
              onMouseEnter={() => setDropdownOpen(true)}
              onClick={() => setDropdownOpen((v) => !v)}
            >
              Services <ChevronDown size={16} />
            </button>
            <div className={`nav-dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              {dropdownItems.map((item) => (
                <Link to={item.to} key={item.label} onClick={closeAll}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/services" className="nav-link" onClick={closeAll}>
            Industries
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeAll}>
            About Us
          </NavLink>
          <NavLink to="/careers" className="nav-link" onClick={closeAll}>
            Careers
          </NavLink>

          <Link className="btn-primary nav-mobile-cta" to="/careers" onClick={closeAll}>
            Let's Talk!
          </Link>
        </div>

        <Link className="btn-primary nav-cta" to="/careers" onClick={closeAll}>
          Let's Talk!
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
