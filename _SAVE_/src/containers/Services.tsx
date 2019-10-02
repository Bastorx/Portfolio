import React from "react";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation("translation");
  return (
    <div id="fh5co-features" className="animate-box">
      <div className="container">
        <div className="services-padding">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>{t("services.title")}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-paintbrush"></i>
                </span>
                <div className="feature-copy">
                  <h3>{t("services.frontEndIntegration.title")}</h3>
                  <p>{t("services.frontEndIntegration.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-bargraph"></i>
                </span>
                <div className="feature-copy">
                  <h3>{t("services.webDevelopment.title")}</h3>
                  <p>{t("services.webDevelopment.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-mobile"></i>
                </span>
                <div className="feature-copy">
                  <h3>{t("services.mobileDevelopment.title")}</h3>
                  <p>{t("services.mobileDevelopment.description")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-cloud"></i>
                </span>
                <div className="feature-copy">
                  <h3>{t("services.cloudSolution.title")}</h3>
                  <p>{t("services.cloudSolution.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-search"></i>
                </span>
                <div className="feature-copy">
                  <h3>{t("services.analytics.title")}</h3>
                  <p>{t("services.analytics.description")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-chat"></i>
                </span>
                <div className="feature-copy">
                  <h3>{t("services.support.title")}</h3>
                  <p>{t("services.support.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
