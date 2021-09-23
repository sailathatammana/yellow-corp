// NPM package
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";

// Project files
import ParcelDetail from "../components/ParcelDetail";
import { parcelState } from "../state/parcelData";

export default function Detail({ match }) {
  // Global state
  const parcels = useRecoilValue(parcelState);
  const { t, i18n } = useTranslation();
  const routerID = match.params.id;
  const parcel = parcels.find((item) => item.parcel_id === routerID);

  return (
    <div id="results" className="container">
      <h1 className="intro">{t("parcelView.title")}</h1>
      <div className="ParcelDetail">
        <ParcelDetail key={parcel.id} information={parcel} />
      </div>
      <hr />
      <div className="center">
        <Link className="back-link" to="/overview">
          ⬅ {t("parcelView.back")}
        </Link>
      </div>
    </div>
  );
}
