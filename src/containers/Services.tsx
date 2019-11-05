import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { injectIntl } from "gatsby-plugin-intl";

interface IProps {
  intl: any;
}
const ServicesComponent = ({ intl }: IProps) => {
  return (
    <div id="fh5co-features" className="animate-box">
      <Container>
        <div className="services-padding">
          <Row>
            <Col
              md={8}
              offset={{ md: 2 }}
              className="text-center fh5co-heading"
            >
              <h2>{intl.formatMessage({ id: "services.title" })}</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-paintbrush" />
                </span>
                <div className="feature-copy">
                  <h3>
                    {intl.formatMessage({
                      id: "services.frontEndIntegration.title",
                    })}
                  </h3>
                  <p>
                    {intl.formatMessage({
                      id: "services.frontEndIntegration.description",
                    })}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-bargraph" />
                </span>
                <div className="feature-copy">
                  <h3>
                    {intl.formatMessage({
                      id: "services.webDevelopment.title",
                    })}
                  </h3>
                  <p>
                    {intl.formatMessage({
                      id: "services.webDevelopment.description",
                    })}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-mobile" />
                </span>
                <div className="feature-copy">
                  <h3>
                    {intl.formatMessage({
                      id: "services.mobileDevelopment.title",
                    })}
                  </h3>
                  <p>
                    {intl.formatMessage({
                      id: "services.mobileDevelopment.description",
                    })}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-cloud" />
                </span>
                <div className="feature-copy">
                  <h3>
                    {intl.formatMessage({ id: "services.cloudSolution.title" })}
                  </h3>
                  <p>
                    {intl.formatMessage({
                      id: "services.cloudSolution.description",
                    })}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-search" />
                </span>
                <div className="feature-copy">
                  <h3>
                    {intl.formatMessage({ id: "services.analytics.title" })}
                  </h3>
                  <p>
                    {intl.formatMessage({
                      id: "services.analytics.description",
                    })}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-chat" />
                </span>
                <div className="feature-copy">
                  <h3>
                    {intl.formatMessage({ id: "services.support.title" })}
                  </h3>
                  <p>
                    {intl.formatMessage({ id: "services.support.description" })}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export const Services = injectIntl(ServicesComponent);
