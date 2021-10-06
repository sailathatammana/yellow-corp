import { useTranslation } from "react-i18next";

export default function StatusWording({ orderStatus }) {
  const { t } = useTranslation();

  // same refactor technique to make each statement fit in 1 line
  return (
    <div>
      {orderStatus === "order-info-received" && (
        <p className="status">{t("parcelView.infoReceived")}</p>
      )}
      {orderStatus === "on-the-way" && (
        <p className="status">{t("parcelView.onTheWay")}</p>
      )}
      {orderStatus === "delivered" && (
        <p className="status">{t("parcelView.delivered")}</p>
      )}
      {orderStatus === "ready-for-pickup" && (
        <p className="status">{t("parcelView.ready")}</p>
      )}
    </div>
  );
}
