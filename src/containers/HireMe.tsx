import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { injectIntl } from "gatsby-plugin-intl";

interface IProps {
  intl: any;
}
const HireMeComponent = ({ intl }: IProps) => {
  return (
    <div id="fh5co-started" className="fh5co-bg-dark">
      <div className="overlay" />
      <Container>
        <Row className="animate-box">
          <Col
            md={{ span: 8, offset: 2 }}
            className="text-center fh5co-heading"
          >
            <h2>{intl.formatMessage({ id: "contact.title" })}</h2>
            <p>
              <a
                href="mailto:me@bastienchevallier.com"
                className="btn btn-default btn-lg"
              >
                {intl.formatMessage({ id: "contact.button" })}
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const HireMe = injectIntl(HireMeComponent);
