import { useState } from "react";
import i18n from "../i18n";

export default function Language() {
  const [language, setLanguage] = useState("en");

  const enObject = require("../assests/en.png");
  const enURL = enObject.default;
  const seObject = require("../assests/se.png");
  const seURL = seObject.default;

  function onClick() {
    if (language === "en") {
      i18n.changeLanguage("se");
      setLanguage("se");
    } else if (language === "se") {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  }

  return (
    <div className="language-selector" onClick={onClick}>
      <span className="language-name" onClick={onClick}>
        {language === "en" && "Svenska"}
        {language === "se" && "English"}
      </span>
      {language === "en" && (
        <img src={seURL} alt="Swedish flag" className="flag" />
      )}
      {language === "se" && <img src={enURL} alt="UK flag" className="flag" />}
    </div>
  );
}
