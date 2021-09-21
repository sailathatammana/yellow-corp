// NPM pacakge
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faShippingFast,
  faStore,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";

export default function StatusIcon({ orderStatus }) {
  return (
    <div className="StatusIcon">
      {orderStatus === "order-info-received" && (
        <FontAwesomeIcon icon={faSatelliteDish} />
      )}
      {orderStatus === "on-the-way" && (
        <FontAwesomeIcon icon={faShippingFast} />
      )}
      {orderStatus === "delivered" && <FontAwesomeIcon icon={faCheckCircle} />}
      {orderStatus === "ready-for-pickup" && <FontAwesomeIcon icon={faStore} />}
    </div>
  );
}
