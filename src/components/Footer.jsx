import { Link } from 'react-router-dom';
import Brand from './Brand.jsx';
import { routes } from '../routes.js';

const currentYear = new Date().getFullYear();

export default function Footer({ description, links, tracks, heading = 'Tracks' }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand href={routes.home} footer size={52} />
          <p>{description}</p>
        </div>
        <div>
          <h3>Explore</h3>
          {links.map((link) => (
            <Link to={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>{heading}</h3>
          {tracks.map((track) => (
            <span key={track}>{track}</span>
          ))}
        </div>
        <div>
          <h3>Connect</h3>
          <a href="mailto:hello@gravitytechsoftware.com">hello@gravitytechsoftware.com</a>
          <a href="tel:+919876543210">+91 98765 43210</a>
          <span>Pune, India</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {currentYear} GravityTech Software. All rights reserved.</p>
        <p>Privacy . Terms</p>
      </div>
    </footer>
  );
}
