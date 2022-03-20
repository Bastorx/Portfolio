import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import DevToSvg from "../images/dev-to.svg";

import reactApollo from "../images/react-apollo.png";

interface IProps {
  intl: any;
}
const BlogComponent = ({ intl }: IProps) => {
  return (
    <div id="fh5co-blog">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>
              {intl.formatMessage({ id: "blog.title" })}
              <a href="https://dev.to/bastorx">
                <DevToSvg className="logo-dev-to" />
              </a>
            </h2>
            <p>{intl.formatMessage({ id: "blog.subTitle" })}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="fh5co-blog animate-box">
              <a
                href="https://dev.to/bastorx/many-ways-to-use-apollo-28l9"
                className="blog-bg"
                style={{
                  backgroundImage: `url(${reactApollo})`,
                  backgroundSize: "contain",
                  backgroundColor: "rgba(10, 216, 188, .23)",
                }}
              />
              <div className="blog-text">
                <span className="posted_on">Sep. 21th 2019</span>
                <h3>
                  <a href="https://dev.to/bastorx/many-ways-to-use-apollo-28l9">
                    Many ways to use Apollo
                  </a>
                </h3>
                <p>
                  Apollo has established itself as the most widely used package
                  to use GraphQL on the client side with React.
                  <br />
                  In each version, the usage of Apollo has evolved considerably.
                  There are several ways to use Apollo.
                </p>
                <ul className="stuff">
                  {/* <li><i className="icon-heart2"></i>249</li><li><i className="icon-eye2"></i>308</li> */}
                  <li>
                    <a href="https://dev.to/bastorx/many-ways-to-use-apollo-28l9">
                      {intl.formatMessage({ id: "blog.readMore" })}
                      <i className="icon-arrow-right22" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    </div>
  );
};

export const Blog = injectIntl(BlogComponent);
