// NPM Package
import { Link } from "react-router-dom";

// Project files
import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";

export default function ParcelOverview({ information }) {
  return (
    <Link to={`parcel/${information.parcel_id}`}>
      <div className="OrderConcise">
        <div className="left">
          <StatusIcon orderStatus={information.status} />
        </div>
        <div className="right">
          <p className="sender">{information.sender}</p>
          <StatusWording orderStatus={information.status} />
        </div>
      </div>
    </Link>
  );
}
