// NPM package
import { Link } from "react-router-dom";

//Project files
import logo from "../assests/logo.png";

export default function Navigation() {
  return (
    <nav className="Header">
      <Link to="/">
        <img className="logo" src={logo} alt="YellowCorp logo" />
      </Link>
    </nav>
  );
}
