// NPM Package
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Project files
import Date from "./Date";
import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";

export default function ParcelOverview({ information }) {
  const { t } = useTranslation();

  // good use of a propertie to make the JSX easy to read.
  // please apply the same on ParcelDetail
  const whetherArrived =
    information.status === "delivered" ||
    information.status === "ready-for-pickup"
      ? t("listView.arrivedOn")
      : t("listView.arrivingOn");

  return (
    <Link to={`parcel/${information.parcel_id}`} className="parcel-link">
      <div className="ParcelOverview">
        <div className="left">
          <StatusIcon orderStatus={information.status} />
        </div>
        <div className="right">
          <p className="sender">{information.sender}</p>
          <StatusWording orderStatus={information.status} />
          <p className="eta">
            {whetherArrived} <Date dateString={information.eta} />
          </p>
          <p className="location">
            {t("listView.pickup")} {information.location_name}
          </p>
        </div>
      </div>
    </Link>
  );
}
