import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";

import backup from "../data/orders.json";
import ParcelOverview from "../components/ParcelOverview";
import { parcelState } from "../state/parcelData";

export default function Overview() {
  const [parcels, setParcels] = useRecoilState(parcelState);
  const [status, setStatus] = useState(0);
  const { t } = useTranslation();
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
    console.log("Error:", error);
    setParcels(backup);
    setStatus(2);
  }

  return (
    <div id="parcels" className="container">
      <div className="text-intro">
        <h1>{t("listView.title")}</h1>
        <p>{t("listView.description")}</p>
      </div>
      <div className="grid">
        {status === 0 && <p>{t("listView.loading")}</p>}
        {status === 1 && ParcelsArray}
        {status === 2 && ParcelsArray}
      </div>
    </div>
  );
}
