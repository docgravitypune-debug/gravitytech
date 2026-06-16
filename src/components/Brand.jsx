import { Link } from 'react-router-dom';

export default function Brand({ href = '/', footer = false, size = 40 }) {
  return (
    <Link className={`brand ${footer ? 'brand-footer' : ''}`} to={href} aria-label="GravityTech Software home">
      <div className="brand-mark">
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="gt-face" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00e5ff" />
              <stop offset="50%" stopColor="#7b68ee" />
              <stop offset="100%" stopColor="#e040fb" />
            </linearGradient>
            <linearGradient id="gt-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#003d55" />
              <stop offset="100%" stopColor="#1a0a3d" />
            </linearGradient>
            <filter id="gt-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <text x="6" y="36" fontFamily="Syne, sans-serif" fontWeight="800" fontSize="28" fill="url(#gt-shadow)" transform="translate(2.5,2.5)">
            GT
          </text>
          <text x="6" y="36" fontFamily="Syne, sans-serif" fontWeight="800" fontSize="28" fill="url(#gt-shadow)" transform="translate(1.5,1.5)" opacity="0.5">
            GT
          </text>
          <text x="6" y="36" fontFamily="Syne, sans-serif" fontWeight="800" fontSize="28" fill="url(#gt-face)" filter="url(#gt-glow)">
            GT
          </text>
        </svg>
      </div>
      <div className="brand-text">
        <span className="brand-name">GravityTech</span>
        <span className="brand-sub">SOFTWARE</span>
      </div>
    </Link>
  );
}
