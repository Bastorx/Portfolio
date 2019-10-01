import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

interface IProps {
  intl: any;
}
const ServicesComponent = ({ intl }: IProps) => {
  return (
    <div id="fh5co-features" className="animate-box">
      <div className="container">
        <div className="services-padding">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>{intl.formatMessage({ id: "services.title" })}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
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
            </div>
            <div className="col-md-4 text-center">
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
            </div>
            <div className="col-md-4 text-center">
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
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
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
            </div>
            <div className="col-md-4 text-center">
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
            </div>
            <div className="col-md-4 text-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Services = injectIntl(ServicesComponent);
