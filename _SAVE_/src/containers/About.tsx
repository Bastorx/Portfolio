import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { contentWayPoint } from "../helpers";

export function About() {
  const { t } = useTranslation("translation");
  useEffect(() => {
    if (typeof $ !== "undefined") {
      contentWayPoint();
    }
  }, []);
  return (
    <div id="fh5co-about" className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>{t("about.title")}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-5">
            <ul className="info">
              <li>
                <span className="first-block">{t("about.info.fullName")}:</span>
                <span className="second-block">Bastien Chevallier</span>
              </li>
              <li>
                <span className="first-block">{t("about.info.phone")}:</span>
                <span className="second-block">
                  <a href="tel:+33612157463">(+33) 6 12 15 74 63</a>
                </span>
              </li>
              <li>
                <span className="first-block">{t("about.info.email")}:</span>
                <span className="second-block">
                  <a href="mailto:me@bastienchevallier.com">
                    me@bastienchevallier.com
                  </a>
                </span>
              </li>
              <li>
                <span className="first-block">{t("about.info.website")}:</span>
                <span className="second-block">
                  <a href="https://www.bastienchevallier.com">
                    www.bastienchevallier.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-7">
            <h2>{t("about.hello")}</h2>
            <p>{t("about.content")}</p>
            <p>
              {t("about.situation")}
              <br />
              <br />
            </p>

            <ul className="fh5co-social-icons">
              <li>
                <a href="https://www.linkedin.com/in/bastien-chevallier/">
                  <i className="icon-linkedin2"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Bastorx">
                  <i className="icon-github2"></i>
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/~bastorx">
                  <i className="icon-npm"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/cheval_b">
                  <i className="icon-twitter2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
