import { Linkedin, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap footer-main">
        <div className="footer-brand">
          <img src={logo} alt="GravityTech" />
          <h3>GravityTech Software</h3>
          <p>Engineering the future, one commit at a time.</p>
        </div>

        <div className="footer-grid">
          <div>
            <h4>Pages</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/careers">Careers</Link>
          </div>

          <div>
            <h4>Services</h4>
            <Link to="/services#crm">CRM Solutions</Link>
            <Link to="/services#talent">Talent Acquisition</Link>
            <Link to="/services#enterprise">Enterprise Solutions</Link>
            <Link to="/services#payroll">Third Party Payroll</Link>
          </div>

          <div>
            <h4>Programs</h4>
            <Link to="/careers#scip">SCIP</Link>
            <Link to="/careers#open-positions">Open Positions</Link>
            <Link to="/careers#apply">Apply</Link>
          </div>

          <div>
            <h4>Social</h4>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a href="https://www.x.com" target="_blank" rel="noreferrer">
              <Twitter size={16} /> X
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 GravityTech Software</span>
        <Link to="/about">Privacy Policy</Link>
        <Link to="/about">Notice</Link>
      </div>
    </footer>
  );
}

export default Footer;
