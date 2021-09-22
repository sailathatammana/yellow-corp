// NPM package
import { Link } from "react-router-dom";

//Project files
import logo from "../assests/logo.png";

export default function Navigation() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="YellowCorp logo" />
      <ul>
        <li>
          <Link to="/" exact>
            Home
          </Link>
        </li>
        <li>
          <Link to="/overview">Parcels</Link>
        </li>
      </ul>
    </div>
  );
}
