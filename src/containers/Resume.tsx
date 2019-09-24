import React from "react";
import { useTranslation } from "react-i18next";

export const Resume = () => {
  const { t } = useTranslation("translation");
  return (
    <div id="fh5co-resume" className="fh5co-bg-color">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>{t("resume.title")}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline">
              <li className="timeline-heading text-center animate-box">
                <div>
                  <h3>{t("resume.workExperience.title")}</h3>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {t("resume.workExperience.AWE.title")}
                    </h3>
                    <span className="company">
                      <a href="https://www.awe.fr">
                        {t("resume.workExperience.AWE.company")}
                      </a>{" "}
                      - {t("resume.workExperience.AWE.period")}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>{t("resume.workExperience.AWE.description")}</p>
                    <p>{t("resume.workExperience.AWE.role")}</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {t("resume.workExperience.Beedeez.title")}
                    </h3>
                    <span className="company">
                      <a href="https://www.beedeez.com">
                        {t("resume.workExperience.Beedeez.company")}
                      </a>{" "}
                      - {t("resume.workExperience.Beedeez.period")}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>{t("resume.workExperience.Beedeez.description")}</p>
                    <p>{t("resume.workExperience.Beedeez.role")}</p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {t("resume.workExperience.One2Team.title")}
                    </h3>
                    <span className="company">
                      <a href="https://one2team.com">
                        {t("resume.workExperience.One2Team.company")}
                      </a>{" "}
                      - {t("resume.workExperience.One2Team.period")}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>{t("resume.workExperience.One2Team.description")}</p>
                    <p>{t("resume.workExperience.One2Team.role")}</p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-inverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {t("resume.workExperience.Hairfie.title")}
                    </h3>
                    <span className="company">
                      {t("resume.workExperience.Hairfie.company")} -{" "}
                      {t("resume.workExperience.Hairfie.period")}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>{t("resume.workExperience.Hairfie.description")}</p>
                    <p>{t("resume.workExperience.Hairfie.role")}</p>
                  </div>
                </div>
              </li>
              <li
                className="timeline-heading text-center animate-box"
                style={{ marginTop: 44 }}>
                <div>
                  <h3>{t("resume.education.title")}</h3>
                </div>
              </li>
              <li className="timeline-unverted animate-box">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {t("resume.education.ETNA.title")}
                    </h3>
                    <span className="company">
                      <a href="https://etna.io">
                        {t("resume.education.ETNA.school")}
                      </a>{" "}
                      - {t("resume.education.ETNA.period")}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>{t("resume.education.ETNA.description")}</p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-inverted">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {t("resume.education.Corbusier.title")}
                    </h3>
                    <span className="company">
                      <a href="http://www.lyc-lecorbusier-poissy.ac-versailles.fr/">
                        {t("resume.education.Corbusier.school")}
                      </a>{" "}
                      - {t("resume.education.Corbusier.period")}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>{t("resume.education.Corbusier.description")}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
