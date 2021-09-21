// NPM package
import { Link } from "react-router-dom";

import logo from "../assests/yellowCorp.jpg";

export default function Home() {
  return (
    <div id="home" className="container">
      <img
        className="image-van"
        src={logo}
        alt="Illustration of a delivery van"
      />
      <h1>Track your parcels with ease</h1>
      <h2>View all parcels</h2>
      <Link to="/overview">View all parcels</Link>
    </div>
  );
}
