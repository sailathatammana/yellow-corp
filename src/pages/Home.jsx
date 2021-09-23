import { useTranslation } from "react-i18next";
import logo from "../assests/yellowCorp.jpg";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div id="home" className="container">
      <h1>{t("homeView.title")}</h1>
      <img
        className="image-van"
        src={logo}
        alt="Illustration of a delivery van"
      />
      {/*       <div className="home-intro">
          <h2>View all parcels</h2>
        <p>Get an overview of all tracked parcels.</p>
        <Link to="/overview" className="link">
          View all parcels
        </Link> 
      </div> */}
    </div>
  );
}
