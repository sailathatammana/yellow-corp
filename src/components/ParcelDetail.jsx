import { useTranslation } from "react-i18next";
import DateTime from "./DateTime";
import Map from "./Map";
import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";

export default function ParcelDetail({ information }) {
  const { t } = useTranslation();
  const coordinates = {
    lat: information.location_coordinate_latitude,
    lng: information.location_coordinate_longitude,
  };

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
          <p className="label">{t("parcelView.location")}</p>
          <p className="actual">{information.location_name}</p>
        </article>
        <article className="result-right">
          <p className="label">{t("parcelView.phone")}</p>
          <p className="actual">{information.user_phone}</p>
          <p className="label">{t("parcelView.verification")}</p>
          {information.verification_required ? (
            <p className="actual">{t("parcelView.yes")} </p>
          ) : (
            <p className="actual">{t("parcelView.no")}</p>
          )}
          <p className="label">{t("parcelView.notes")}</p>
          {information.notes != null ? (
            <p className="actual">{information.notes}</p>
          ) : (
            <p className="actual">{t("parcelView.none")}</p>
          )}
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
