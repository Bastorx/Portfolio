import React, { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { injectIntl } from "gatsby-plugin-intl";

import { contentWayPoint } from "@helpers";

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
      <Container>
        <Row>
          <Col md={2} offset={{ md: 2 }} className="text-center fh5co-heading">
            <h2>{intl.formatMessage({ id: "about.title" })}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={5}>
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
                  <a href="tel:+33188339774">(+33) 1 88 33 97 74</a>
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
          </Col>
          <Col xs={12} md={6} lg={7}>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const About = injectIntl(AboutComponent);
