import React from "react";

export const Resume = () => (
  <div id="fh5co-resume" className="fh5co-bg-color">
    <div className="container">
      <div className="row animate-box">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
          <h2>My Resume</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-md-offset-0">
          <ul className="timeline">
            <li className="timeline-heading text-center animate-box">
              <div>
                <h3>Work Experience</h3>
              </div>
            </li>
            <li className="animate-box timeline-unverted">
              <div className="timeline-badge">
                <i className="icon-suitcase"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Full Stack Developer</h3>
                  <span className="company">
                    <a href="https://www.awe.fr">AWE</a> - 2018 (January) -
                    Current
                  </span>
                </div>
                <div className="timeline-body">
                  <p>
                    AWE is a consulting, technology and marketing services firm.
                    We are helping our clients with strategy, data management,
                    content marketing, performance management and marketing
                    automation.
                  </p>
                  <p>
                    Role: Full Stack Developer in R&D. Dashboards development.
                    React, Typescript, MySQL, Google Clound Platform, Docker,
                    Kubernetes & Skaffold
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted animate-box">
              <div className="timeline-badge">
                <i className="icon-suitcase"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Full Stack Developer</h3>
                  <span className="company">
                    <a href="https://www.beedeez.com">Beedeez</a> - 2017
                    (February) - 2017 (December)
                  </span>
                </div>
                <div className="timeline-body">
                  <p>
                    Beedeez is a mobile-learning application directly destinate
                    for the companies. It provides many tools to help the
                    increasement of the formations inside your company.
                  </p>
                  <p>
                    Role: Web developer, Mobile developer, Back-end developer :
                    React / React-Native / NodeJS / MongoDB
                  </p>
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
                    Front End Angular.js Developer
                  </h3>
                  <span className="company">
                    <a href="https://one2team.com">One2Team</a> - 2016 (October)
                    - 2017 (February)
                  </span>
                </div>
                <div className="timeline-body">
                  <p>
                    You need agility and autonomy, at start-up pace — but with
                    the complexity of scale. See how One2Team's work management
                    platform empowers teams and breaks silos while reducing
                    files, rework and deadlines.
                  </p>
                  <p>Role: Web integrator, Angular.js</p>
                </div>
              </div>
            </li>
            <li className="animate-box timeline-inverted">
              <div className="timeline-badge">
                <i className="icon-suitcase"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Full Stack Developer</h3>
                  <span className="company">
                    Hairfie - 2015 (June) - 2016 (January)
                  </span>
                </div>
                <div className="timeline-body">
                  <p>
                    Hairfie was a mobile application to easely find the best
                    hairdress for you
                  </p>
                  <p>
                    Role: Web developer, React / NodeJS / Loopback / MongoDB
                  </p>
                </div>
              </div>
            </li>
            <li
              className="timeline-heading text-center animate-box"
              style={{ marginTop: 44 }}>
              <div>
                <h3>Education</h3>
              </div>
            </li>
            <li className="timeline-unverted animate-box">
              <div className="timeline-badge">
                <i className="icon-graduation-cap"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Masters Degree</h3>
                  <span className="company">
                    <a href="https://etna.io">ETNA</a> - 2014 - 2019
                  </span>
                </div>
                <div className="timeline-body">
                  <p>
                    The École des technologies numériques appliquées (ETNA) is a
                    French private school in computer science localized at
                    Ivry-sur-Seine. Created in 2005 by Patrice Dumoucel, the
                    school since 2006 is part of IONIS Education Group. The
                    certification delivered by the school are recognized by the
                    French state.
                  </p>
                </div>
              </div>
            </li>
            <li className="animate-box timeline-inverted">
              <div className="timeline-badge">
                <i className="icon-graduation-cap"></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className="timeline-title">Bachelors Degree</h3>
                  <span className="company">
                    <a href="http://www.lyc-lecorbusier-poissy.ac-versailles.fr/">
                      Lycée le corbusier
                    </a>{" "}
                    - 2010 - 2014
                  </span>
                </div>
                <div className="timeline-body">
                  <p>Grade: General Scientific Baccalaureate</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
