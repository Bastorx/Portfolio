import React, { useEffect } from "react";
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
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>{intl.formatMessage({ id: "skills.title" })}</h2>
          </div>
        </div>
        <div className="row row-pb-md">
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <div className="chart" data-percent="85">
              <span>
                <strong>Go</strong>85%
              </span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <div className="chart" data-percent="95">
              <span>
                <strong>Typescript / Node</strong>95%
              </span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <div className="chart" data-percent="85">
              <span>
                <strong>C</strong>85%
              </span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <div className="chart" data-percent="80">
              <span>
                <strong>Rust</strong>80%
              </span>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <div className="chart" data-percent="90">
              <span>
                <strong>React.js<br />React Native</strong>90%
              </span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <div className="chart" data-percent="80">
              <span>
                <strong>Vue</strong>80%
              </span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <div className="chart" data-percent="90">
              <span>
                <strong>Javascript</strong>90%
              </span>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 text-center">
            <div className="chart" data-percent="90">
              <span>
                <strong>HTML / CSS</strong>90%
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="progress-wrap">
              <h3>
                <span className="name-left">SQL (MySQL / PostgreSQL)</span>
                <span className="value-right">85%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-1 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">MongoDB</span>
                <span className="value-right">85%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-2 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            <div className="progress-wrap">
              <h3>
                <span className="name-left">Docker</span>
                <span className="value-right">90%</span>
              </h3>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-3 progress-bar-striped active"
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
                  className="progress-bar progress-bar-4 progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "85%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export const Skills = injectIntl(SkillsComponent);
