// NPM Packages
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

// Project files
import backup from "../data/orders.json";
import ParcelOverview from "../components/ParcelOverview";
import { parcelState } from "../state/parcelData";

export default function Overview() {
  const [parcels, setParcels] = useRecoilState(parcelState);
  const [status, setStatus] = useState(0);
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
  const ParcelsArray = parcels.map((item) => (
    <ParcelOverview key={item.id} information={item} />
  ));

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => onFetchSuccess(json))
      .catch((error) => onFetchFail(error));
  }, [setStatus, setParcels]);

  function onFetchSuccess(json) {
    setParcels(json);
    setStatus(1);
  }
  function onFetchFail(error) {
    console.log(
      "Failed to fetch data from API, using backup data for demo purposes instead. Error:",
      error
    );
    setParcels(backup);
    setStatus(2);
  }

  return (
    <div id="parcels" className="container">
      <div className="text-intro">
        <h1>All parcels</h1>
        <p>
          Click on a parcel for full details, or use the search bar above to
          filter results.
        </p>
      </div>
      <div className="grid">
        {status === 0 && <p>Loading parcels...</p>}
        {status === 1 && ParcelsArray}
        {status === 2 && ParcelsArray}
      </div>
    </div>
  );
}
