import React, { useEffect } from "react";
import { injectIntl } from "gatsby-plugin-intl";

import { LanguageSelector } from "../components/LanguageSelector";

import { IsMobile } from "../helpers";

interface IProps {
  intl: any;
}
const HeaderComponent = ({ intl }: IProps) => {
  useEffect(() => {
    if (typeof $ !== "undefined") {
      if (!IsMobile.any()) {
        $(".js-fullheight").css("height", $(window).height());
        $(window).resize(() => {
          $(".js-fullheight").css("height", $(window).height());
        });
      }
    }
  });
  return (
    <header
      id="fh5co-header"
      className="fh5co-cover js-fullheight"
      role="banner"
      style={{
        backgroundImage: `url(${require("../images/cover.jpg")}`,
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="language-selector">
        <LanguageSelector />
      </div>
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight">
              <div
                className="display-tc js-fullheight animate-box"
                data-animate-effect="fadeIn"
              >
                <div
                  className="profile-thumb"
                  style={{
                    background: `url(${require("../images/bastien.jpg")}`,
                  }}
                />
                <h1>
                  <span>Bastien Chevallier</span>
                </h1>
                <h3>
                  <span>{intl.formatMessage({ id: "title" })}</span>
                </h3>
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
      </div>
    </header>
  );
};

export const Header = injectIntl(HeaderComponent);
