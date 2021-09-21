// NPM package
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

// Project files
import ParcelDetail from "../components/ParcelDetail";
import { parcelState } from "../state/parcelData";

export default function Detail({ match }) {
  // Global state
  const parcels = useRecoilValue(parcelState);
  const routerID = match.params.id;
  const parcel = parcels.find((item) => item.parcel_id === routerID);

  return (
    <div id="results" className="container">
      <h1>Parcel details</h1>
      <div className="OrderDetailed">
        <ParcelDetail key={parcel.id} information={parcel} />
      </div>
      <Link className="back-to-overview" to="/">
        ⬅ Back to all parcels
      </Link>
    </div>
  );
}
