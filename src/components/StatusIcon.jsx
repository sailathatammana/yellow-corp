// NPM pacakge
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faShippingFast,
  faStore,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";

export default function StatusIcon({ orderStatus }) {
  const iconSatelite = <FontAwesomeIcon icon={faSatelliteDish} />;
  const iconFast = <FontAwesomeIcon icon={faShippingFast} />;

  return (
    // to make this one line do this:
    <div className="StatusIcon">
      {orderStatus === "order-info-received" && iconSatelite}
      {orderStatus === "on-the-way" && iconFast}
      {orderStatus === "delivered" && <FontAwesomeIcon icon={faCheckCircle} />}
      {orderStatus === "ready-for-pickup" && <FontAwesomeIcon icon={faStore} />}
    </div>
  );
}
