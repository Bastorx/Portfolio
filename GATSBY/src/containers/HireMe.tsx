import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

interface IProps {
  intl: any;
}
const HireMeComponent = ({ intl }: IProps) => {
  return (
    <div id="fh5co-started" className="fh5co-bg-dark">
      <div className="overlay" />
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>{intl.formatMessage({ id: "contact.title" })}</h2>
            <p>
              <a
                href="mailto:me@bastienchevallier.com"
                className="btn btn-default btn-lg"
              >
                {intl.formatMessage({ id: "contact.button" })}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HireMe = injectIntl(HireMeComponent);
