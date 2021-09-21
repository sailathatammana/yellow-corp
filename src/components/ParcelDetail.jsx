import StatusIcon from "./StatusIcon";
import StatusWording from "./StatusWording";

export default function ParcelDetail({ information }) {
  return (
    <div className="OrderDetailed">
      <StatusIcon orderStatus={information.status} />
      <p className="data-label">Sender</p>
      <p className="data-actual">{information.sender}</p>
      <p className="data-label">Status</p>
      <StatusWording orderStatus={information.status} />
      {/* TODO convert to long date */}
      <p className="data-label">Estimated delivery date</p>
      <p className="data-actual">{information.eta}</p>
      <p className="data-label">Parcel ID</p>
      <p className="data-actual">{information.parcel_id}</p>
      <p className="data-label">Pickup location</p>
      <p className="data-actual">{information.location_name}</p>
      <p className="data-label">Phone number</p>
      <p className="data-actual">{information.user_phone}</p>
      <p className="data-label">Verification required?</p>
      <p className="data-actual">{information.verification_required}</p>
      <p className="data-label">Notes</p>
      {information.notes != null && (
        <p className="data-actual">{information.notes}</p>
      )}
      {information.notes === null && <p className="data-actual">None</p>}
      {/* TODO convert to long date and time */}
      <p className="data-label">Last updated</p>
      <p className="data-actual">{information.last_updated}</p>
    </div>
  );
}
