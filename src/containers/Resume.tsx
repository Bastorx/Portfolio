import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

interface IProps {
  intl: any;
}
const ResumeComponent = ({ intl }: IProps) => {
  return (
    <div id="fh5co-resume" className="fh5co-bg-color">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>{intl.formatMessage({ id: "resume.title" })}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline">
              <li className="timeline-heading text-center animate-box">
                <div>
                  <h3>
                    {intl.formatMessage({ id: "resume.workExperience.title" })}
                  </h3>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {intl.formatMessage({
                        id: "resume.workExperience.DNUM.title",
                      })}
                    </h3>
                    <span className="company">
                      <a href="https://www.quadient.com/">
                        {intl.formatMessage({
                          id: "resume.workExperience.DNUM.company",
                        })}
                      </a>{" "}
                      -{" "}
                      {intl.formatMessage({
                        id: "resume.workExperience.DNUM.period",
                      })}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.DNUM.description",
                      })}
                    </p>
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.DNUM.role",
                      })}
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-inverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {intl.formatMessage({
                        id: "resume.workExperience.Quadient.title",
                      })}
                    </h3>
                    <span className="company">
                      <a href="https://www.quadient.com/">
                        {intl.formatMessage({
                          id: "resume.workExperience.Quadient.company",
                        })}
                      </a>{" "}
                      -{" "}
                      {intl.formatMessage({
                        id: "resume.workExperience.Quadient.period",
                      })}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.Quadient.description",
                      })}
                    </p>
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.Quadient.role",
                      })}
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {intl.formatMessage({
                        id: "resume.workExperience.Homeserve.title",
                      })}
                    </h3>
                    <span className="company">
                      <a href="https://www.homeserve.fr/">
                        {intl.formatMessage({
                          id: "resume.workExperience.Homeserve.company",
                        })}
                      </a>{" "}
                      -{" "}
                      {intl.formatMessage({
                        id: "resume.workExperience.Homeserve.period",
                      })}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.Homeserve.description",
                      })}
                    </p>
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.Homeserve.role",
                      })}
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-inverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {intl.formatMessage({
                        id: "resume.workExperience.Kardinal.title",
                      })}
                    </h3>
                    <span className="company">
                      <a href="https://kardinal.ai/">
                        {intl.formatMessage({
                          id: "resume.workExperience.Kardinal.company",
                        })}
                      </a>{" "}
                      -{" "}
                      {intl.formatMessage({
                        id: "resume.workExperience.Kardinal.period",
                      })}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.Kardinal.description",
                      })}
                    </p>
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.Kardinal.role",
                      })}
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {intl.formatMessage({
                        id: "resume.workExperience.AWE.title",
                      })}
                    </h3>
                    <span className="company">
                      <a href="https://www.awe.fr">
                        {intl.formatMessage({
                          id: "resume.workExperience.AWE.company",
                        })}
                      </a>{" "}
                      -{" "}
                      {intl.formatMessage({
                        id: "resume.workExperience.AWE.period",
                      })}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.AWE.description",
                      })}
                    </p>
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.AWE.role",
                      })}
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-inverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {intl.formatMessage({
                        id: "resume.workExperience.Beedeez.title",
                      })}
                    </h3>
                    <span className="company">
                      <a href="https://www.beedeez.com">
                        {intl.formatMessage({
                          id: "resume.workExperience.Beedeez.company",
                        })}
                      </a>{" "}
                      -{" "}
                      {intl.formatMessage({
                        id: "resume.workExperience.Beedeez.period",
                      })}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.Beedeez.description",
                      })}
                    </p>
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.Beedeez.role",
                      })}
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {intl.formatMessage({
                        id: "resume.workExperience.Hairfie.title",
                      })}
                    </h3>
                    <span className="company">
                      {intl.formatMessage({
                        id: "resume.workExperience.Hairfie.company",
                      })}{" "}
                      -{" "}
                      {intl.formatMessage({
                        id: "resume.workExperience.Hairfie.period",
                      })}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.Hairfie.description",
                      })}
                    </p>
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.Hairfie.role",
                      })}
                    </p>
                  </div>
                </div>
              </li>
              <li
                className="timeline-heading text-center animate-box"
                style={{ marginTop: 44 }}
              >
                <div>
                  <h3>
                    {intl.formatMessage({ id: "resume.education.title" })}
                  </h3>
                </div>
              </li>
              <li className="animate-box timeline-inverted">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {intl.formatMessage({
                        id: "resume.education.ETNA.title",
                      })}
                    </h3>
                    <span className="company">
                      <a href="https://etna.io">
                        {intl.formatMessage({
                          id: "resume.education.ETNA.school",
                        })}
                      </a>{" "}
                      -{" "}
                      {intl.formatMessage({
                        id: "resume.education.ETNA.period",
                      })}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      {intl.formatMessage({
                        id: "resume.education.ETNA.description",
                      })}
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">
                      {intl.formatMessage({
                        id: "resume.education.Corbusier.title",
                      })}
                    </h3>
                    <span className="company">
                      <a href="http://www.lyc-lecorbusier-poissy.ac-versailles.fr/">
                        {intl.formatMessage({
                          id: "resume.education.Corbusier.school",
                        })}
                      </a>{" "}
                      -{" "}
                      {intl.formatMessage({
                        id: "resume.education.Corbusier.period",
                      })}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      {intl.formatMessage({
                        id: "resume.education.Corbusier.description",
                      })}
                    </p>
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

export const Resume = injectIntl(ResumeComponent);
