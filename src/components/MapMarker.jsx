import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function MapMarker() {
  return (
    <div className="marker">
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </div>
  );
}
