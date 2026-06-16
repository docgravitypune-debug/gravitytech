import { Link } from 'react-router-dom';

function BrandMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" width="52" height="52">
      <defs>
        <linearGradient id="gt-lightning" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00c8ff" />
          <stop offset="100%" stopColor="#7c5cfc" />
        </linearGradient>
        <filter id="gt-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#00c8ff" floodOpacity="0.6" />
        </filter>
      </defs>

      <path d="M10 16c0-4.4 3.6-8 8-8h21v8H20c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h11v-9h-8v-8h16v25H18c-4.4 0-8-3.6-8-8V16z" fill="#0a3d5c" />
      <path d="M13 19c0-4.4 3.6-8 8-8h21v5H23c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h11v3H21c-4.4 0-8-3.6-8-8V19z" fill="#1b5b82" opacity="0.68" />
      <path
        d="M42 8h12L43 30h8L36 56l8-20h-8L42 8z"
        fill="url(#gt-lightning)"
        filter="url(#gt-glow)"
      />
    </svg>
  );
}

export default function Brand({ href = '/', footer = false }) {
  return (
    <Link className={`brand ${footer ? 'brand-footer' : ''}`} to={href} aria-label="GravityTech Software home">
      <div className="brand-mark">
        <BrandMark />
      </div>
      <div className="brand-wordmark">
        <strong>GravityTech</strong>
        <span>Software</span>
      </div>
    </Link>
  );
}
