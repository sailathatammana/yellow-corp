// NPM package
import { Link } from "react-router-dom";

// Project files
import Information from "../data/orders.json";
import ParcelDetail from "../components/ParcelDetail";

export default function Detail({ match }) {
  const routerID = match.params.id;
  const parcel = Information.find((item) => item.parcel_id === routerID);

  return (
    <div id="results" className="container">
      <h1>Parcel details</h1>
      <div className="OrderDetailed">
        <ParcelDetail key={parcel.id} information={parcel} />
      </div>
      <Link className="back-to-home" to="/">
        Back to home
      </Link>
    </div>
  );
}
