import React from "react";
import { useTranslation } from "react-i18next";

export const HireMe = () => {
  const { t } = useTranslation("translation");
  return (
    <div id="fh5co-started" className="fh5co-bg-dark">
      <div className="overlay"></div>
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>{t("contact.title")}</h2>
            <p>
              <a
                href="mailto:me@bastienchevallier.com"
                className="btn btn-default btn-lg">
                {t("contact.button")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
