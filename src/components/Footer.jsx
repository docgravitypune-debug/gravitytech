import { Link } from 'react-router-dom';
import Brand from './Brand.jsx';
import { routes } from '../routes.js';

const currentYear = new Date().getFullYear();

export default function Footer({ description, links, tracks, heading = 'Tracks' }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand href={routes.home} footer size={86} />
          <p>{description}</p>
          <Link className="button button-secondary button-small" to={routes.contact}>
            Let&apos;s Talk!
          </Link>
        </div>
        <div>
          <h3>Pages</h3>
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
          <h3>Social</h3>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>
      <p className="copyright">
        <span>&copy; {currentYear} GravityTech Software. All rights reserved.</span>
        <span>Engineering the future, one commit at a time.</span>
      </p>
    </footer>
  );
}
