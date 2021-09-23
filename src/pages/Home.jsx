import { useTranslation } from "react-i18next";
import logo from "../assests/yellowCorp.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div id="home" className="container">
      <h1>{t("homeView.title")}</h1>
      <img
        className="image-van"
        src={logo}
        alt="Illustration of a delivery van"
      />
    </div>
  );
}
