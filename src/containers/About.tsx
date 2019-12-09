import React, { useEffect } from "react";
import { injectIntl } from "gatsby-plugin-intl";

import { contentWayPoint } from "../helpers";

interface IProps {
  intl: any;
}
const AboutComponent = ({ intl }: IProps) => {
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
            <h2>{intl.formatMessage({ id: "about.title" })}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-5">
            <ul className="info">
              <li>
                <span className="first-block">
                  {intl.formatMessage({ id: "about.info.fullName" })}:
                </span>
                <span className="second-block">Bastien Chevallier</span>
              </li>
              <li>
                <span className="first-block">
                  {intl.formatMessage({ id: "about.info.phone" })}:
                </span>
                <span className="second-block">
                  <a href="tel:+33612157463">(+33) 6 12 15 74 63</a>
                </span>
              </li>
              <li>
                <span className="first-block">
                  {intl.formatMessage({ id: "about.info.email" })}:
                </span>
                <span className="second-block">
                  <a href="mailto:me@bastienchevallier.com">
                    me@bastienchevallier.com
                  </a>
                </span>
              </li>
              <li>
                <span className="first-block">
                  {intl.formatMessage({ id: "about.info.website" })}:
                </span>
                <span className="second-block">
                  <a href="https://bastienchevallier.com">
                    bastienchevallier.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-7">
            <h2>{intl.formatMessage({ id: "about.hello" })}</h2>
            <p>{intl.formatMessage({ id: "about.content" })}</p>
            <p>
              {intl.formatMessage({ id: "about.situation" })}
              <br />
              <br />
            </p>
            <ul className="fh5co-social-icons">
              <li>
                <a href="https://www.linkedin.com/in/bastien-chevallier/">
                  <i className="icon-linkedin2" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Bastorx">
                  <i className="icon-github2" />
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/~bastorx">
                  <i className="icon-npm" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/cheval_b">
                  <i className="icon-twitter2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const About = injectIntl(AboutComponent);
