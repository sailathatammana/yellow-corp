import React from "react";
import { useTranslation } from "react-i18next";

import DateTime from "./DateTime";
import Map from "./Map";
import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";

export default function ParcelDetail({ information }) {
  const { t } = useTranslation();
  // this can be an array as ALWAYS the latitude comes first
  const coordinates = [
    information.location_coordinate_latitude,
    information.location_coordinate_longitude,
  ];

  // Properties
  const noteMessage =
    information.notes != null ? information.notes : t("parcelView.none");

  // Readability -1
  // Yo could have play around with either <h3>, <h4> or <label> for the titles, and then just <p> for the text
  // withouth adding extra classes
  return (
    <div className="ParcelDetail">
      <StatusIcon orderStatus={information.status} />
      <div className="details">
        <article className="result-left">
          <p className="label">{t("parcelView.sender")}</p>
          <p className="actual">{information.sender}</p>
          <p className="label">{t("parcelView.status")}</p>
          <StatusWording orderStatus={information.status} />
          <p className="label">{t("parcelView.eta")}</p>
          <DateTime dateString={information.eta} />
          <p className="label">{t("parcelView.id")}</p>
          <p className="actual">{information.parcel_id}</p>
        </article>
        <article className="result-right">
          <p className="label">{t("parcelView.location")}</p>
          <p className="actual">{information.location_name}</p>
          <p className="label">{t("parcelView.phone")}</p>
          <p className="actual">{information.user_phone}</p>
          <p className="label">{t("parcelView.notes")}</p>

          {/* Here you can use a constant to better organize the code */}
          <p className="actual">{noteMessage}</p>
          <p className="label">{t("parcelView.updated")}</p>
          <DateTime dateString={information.last_updated} />
        </article>
      </div>
      <div className="details-map">
        <Map coordinates={coordinates} />
      </div>
    </div>
  );
}
