import React from "react";
import { Row, Col } from "react-grid-system";
import { injectIntl } from "gatsby-plugin-intl";

interface IProps {
  intl: any;
}
const ContactFormComponent = ({ intl }: IProps) => (
  <div id="fh5co-consult">
    <div
      className="video fh5co-video"
      style={{ backgroundImage: "url(images / cover_bg_1.jpg)" }}
    >
      <div className="overlay" />
    </div>
    <div className="choose animate-box">
      <h2>Contact</h2>
      <form action="#">
        <Row className="form-group">
          <Col md={6}>
            <input
              type="text"
              id="fname"
              className="form-control"
              placeholder="Your firstname"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={6}>
            <input
              type="text"
              id="lname"
              className="form-control"
              placeholder="Your lastname"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={12}>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Your email address"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={12}>
            <input
              type="text"
              id="subject"
              className="form-control"
              placeholder="Your subject of this message"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={12}>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              className="form-control"
              placeholder="Say something about us"
            />
          </Col>
        </Row>
        <div className="form-group">
          <input
            type="submit"
            value="Send Message"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  </div>
);

export const ContactForm = injectIntl(ContactFormComponent);
