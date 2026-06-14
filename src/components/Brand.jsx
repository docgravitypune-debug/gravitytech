import { Link } from "react-router-dom";
import logoUrl from "../../assets/logo.svg";

export default function Brand({ href = "/", footer = false, size = 54 }) {
  return (
    <Link
      className={`brand ${footer ? "brand-footer" : ""}`}
      to={href}
      aria-label="GravityTech Software home"
    >
      <img src={logoUrl} alt="GravityTech Software logo" width={size} height={size} />
    </Link>
  );
}
