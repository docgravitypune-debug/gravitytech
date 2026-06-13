import Brand from "./Brand.jsx";

const currentYear = new Date().getFullYear();

export default function Footer({ description, links, tracks, heading = "Tracks" }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand href="index.html" footer size={46} />
          <p>{description}</p>
        </div>
        <div>
          <h3>Explore</h3>
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>{heading}</h3>
          {tracks.map((track) => (
            <span key={track}>{track}</span>
          ))}
        </div>
      </div>
      <p className="copyright">&copy; {currentYear} GravityTech Software. All rights reserved.</p>
    </footer>
  );
}
