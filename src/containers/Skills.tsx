import React, { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { injectIntl } from "gatsby-plugin-intl";

interface IProps {
  intl: any;
}
export const SkillsComponent = ({ intl }: IProps) => {
  useEffect(() => {
    if (typeof $ !== "undefined") {
      if ($("#fh5co-skills").length > 0) {
        $("#fh5co-skills").waypoint(
          function(direction: any) {
            if (direction === "down" && !$(this.element).hasClass("animated")) {
              setTimeout(() => {
                $(".chart").easyPieChart({
                  scaleColor: false,
                  lineWidth: 4,
                  lineCap: "butt",
                  barColor: "#FF9000",
                  trackColor: "#f5f5f5",
                  size: 160,
                  animate: 1000,
                });
              }, 400);
              $(this.element).addClass("animated");
            }
          },
          { offset: "90%" },
        );
      }
    }
  }, []);
  return (
    <div id="fh5co-skills" className="animate-box">
      <Container>
        <Row>
          <Col md={8} offset={{ md: 2 }} className="text-center fh5co-heading">
            <h2>{intl.formatMessage({ id: "skills.title" })}</h2>
          </Col>
        </Row>
        <Row className="row-pb-md">
          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="chart" data-percent="90">
              <span>
                <strong>HTML / CSS</strong>90%
              </span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="chart" data-percent="90">
              <span>
                <strong>Javascript</strong>90%
              </span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="chart" data-percent="95">
              <span>
                <strong>Typescript / Node</strong>95%
              </span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="chart" data-percent="95">
              <span>
                <strong>React</strong>95%
              </span>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="chart" data-percent="85">
              <span>
                <strong>React Native</strong>85%
              </span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="chart" data-percent="85">
              <span>
                <strong>MySQL</strong>85%
              </span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="chart" data-percent="85">
              <span>
                <strong>MongoDB</strong>85%
              </span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-center">
            <div className="chart" data-percent="80">
              <span>
                <strong>Vue</strong>80%
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">Docker</span>
                <span className="value-right">90%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-1 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">Kubernetes / Skaffold</span>
                <span className="value-right">85%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-2 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "90%" }}
                />
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">Go</span>
                <span className="value-right">80%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-3 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">PHP</span>
                <span className="value-right">75%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-4 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "75%" }}
                />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">
                  {intl.formatMessage({ id: "skills.languages.french" })}
                </span>
                <span className="value-right">100%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-5 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">
                  {intl.formatMessage({ id: "skills.languages.english" })}
                </span>
                <span className="value-right">80%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "70%" }}
                />
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">
                  {intl.formatMessage({ id: "skills.languages.portuguese" })}
                </span>
                <span className="value-right">50%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-1 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "50%" }}
                />
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">
                  {intl.formatMessage({ id: "skills.languages.german" })}
                </span>
                <span className="value-right">25%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-3 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "25%" }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const Skills = injectIntl(SkillsComponent);
