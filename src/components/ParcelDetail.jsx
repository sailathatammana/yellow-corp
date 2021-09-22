import DateTime from "./DateTime";
import Map from "./Map";
import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";

export default function ParcelDetail({ information }) {
  const coordinates = {
    lat: information.location_coordinate_latitude,
    lng: information.location_coordinate_longitude,
  };
  return (
    <div className="ParcelDetail">
      <StatusIcon orderStatus={information.status} />
      <div className="details">
        <article className="result-left">
          <p className="label">Sender</p>
          <p className="actual">{information.sender}</p>
          <p className="label">Status</p>
          <StatusWording orderStatus={information.status} />
          <p className="label">Estimated time of arrival</p>
          <DateTime dateString={information.eta} />
          <p className="label">Parcel ID</p>
          <p className="actual">{information.parcel_id}</p>
          <p className="label">Pickup location</p>
          <p className="actual">{information.location_name}</p>
        </article>
        <article className="result-right">
          <p className="label">User phone number</p>
          <p className="actual">{information.user_phone}</p>
          <p className="label">Verification required?</p>
          {information.verification_required ? (
            <p className="actual">Yes </p>
          ) : (
            <p className="actual">No</p>
          )}
          <p className="label">Notes</p>
          {information.notes != null ? (
            <p className="actual">{information.notes}</p>
          ) : (
            <p className="actual">None</p>
          )}
          <p className="label">Last updated</p>
          <DateTime dateString={information.last_updated} />
        </article>
      </div>
      <div className="details-map">
        <Map coordinates={coordinates} />
      </div>
    </div>
  );
}
