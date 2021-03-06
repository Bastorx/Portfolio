import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { injectIntl } from "gatsby-plugin-intl";

interface IProps {
  intl: any;
}
const ResumeComponent = ({ intl }: IProps) => {
  return (
    <div id="fh5co-resume" className="fh5co-bg-color">
      <Container>
        <Row className="animate-box">
          <Col md={8} offset={{ md: 2 }} className="text-center fh5co-heading">
            <h2>{intl.formatMessage({ id: "resume.title" })}</h2>
          </Col>
        </Row>
        <Row>
          <Col md={8} offset={{ md: 2 }}>
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
              <li className="timeline-inverted animate-box">
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
                        id: "resume.workExperience.One2Team.title",
                      })}
                    </h3>
                    <span className="company">
                      <a href="https://one2team.com">
                        {intl.formatMessage({
                          id: "resume.workExperience.One2Team.company",
                        })}
                      </a>{" "}
                      -{" "}
                      {intl.formatMessage({
                        id: "resume.workExperience.One2Team.period",
                      })}
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.One2Team.description",
                      })}
                    </p>
                    <p>
                      {intl.formatMessage({
                        id: "resume.workExperience.One2Team.role",
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
              <li className="timeline-unverted animate-box">
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
              <li className="animate-box timeline-inverted">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const Resume = injectIntl(ResumeComponent);
