export default function AnimatedBackground({ variant = 'default' }) {
  return (
    <div className={`animated-bg animated-bg-${variant}`} aria-hidden="true">
      <span className="animated-bg-orb-1" />
      <span className="animated-bg-orb-2" />
      <div className="grid-glow" />
      <div className="scan-line" />
    </div>
  );
}
