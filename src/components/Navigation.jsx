// NPM package
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//Project files
import logo from "../assests/logo.png";
import Language from "./Language";

export default function Navigation() {
  const { t, i18n } = useTranslation();

  return (
    <div className="header">
      <Language />
      <div>
        <img className="logo" src={logo} alt="YellowCorp logo" />
        <ul>
          <li>
            <Link to="/" exact>
              {t("navigationView.home")}
            </Link>
          </li>
          <li>
            <Link to="/overview">{t("navigationView.parcel")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
