// Project files
import Information from "../data/orders.json";
import ParcelOverview from "../components/ParcelOverview";

export default function Overview() {
  const parcelOverviewArray = Information.map((item) => (
    <ParcelOverview key={item.id} information={item} />
  ));
  return (
    <div id="parcels" className="container">
      <div className="text-intro">
        <h1>All parcels</h1>
        <p>
          Click on a parcel for full details, or use the search bar above to
          filter results.
        </p>
      </div>
      <div className="grid">{parcelOverviewArray}</div>
    </div>
  );
}
