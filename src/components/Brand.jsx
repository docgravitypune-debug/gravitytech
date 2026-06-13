import logoUrl from "../../assets/logo.svg";

export default function Brand({ href = "index.html", footer = false, size = 54 }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href={href}
      aria-label="GravityTech Software home"
    >
      <img src={logoUrl} alt="" width={size} height={size} />
      <span>
        <strong>GravityTech</strong>
        <small>Software</small>
      </span>
    </a>
  );
}
