import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="GravityTech" />
            <div>
              <h3>GravityTech Software</h3>
              <p>IT services partner for growing enterprises.</p>
            </div>
          </div>
          <Link to="/careers" className="btn-primary">
            Let's Talk!
          </Link>
        </div>

        <hr />

        <div className="footer-links">
          <div>
            <h4>Pages</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/careers">Contact</Link>
          </div>
          <div>
            <h4>Services</h4>
            <Link to="/services">CRM Solutions</Link>
            <Link to="/services">Talent Acquisition</Link>
            <Link to="/services">Enterprise Solutions</Link>
            <Link to="/services">Third Party Payroll</Link>
          </div>
          <div>
            <h4>Programs</h4>
            <Link to="/careers">SCIP Program</Link>
            <Link to="/careers">Internships</Link>
            <Link to="/careers">General Applications</Link>
          </div>
          <div>
            <h4>Social</h4>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
            <a href="https://x.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 GravityTech Software. All rights reserved.</span>
          <span>Engineering the future, one commit at a time.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
