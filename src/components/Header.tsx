import { h } from "preact";

export const Header = () => (
  <header
    id="fh5co-header"
    className="fh5co-cover js-fullheight"
    role="banner"
    style={{ backgroundImage: "url(images/cover_bg_3.jpg)" }}
    data-stellar-background-ratio="0.5">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center">
          <div className="display-t js-fullheight">
            <div
              className="display-tc js-fullheight animate-box"
              data-animate-effect="fadeIn">
              <div
                className="profile-thumb"
                style={{ background: "url(images/bastien.jpg)" }}></div>
              <h1>
                <span>Bastien Chevallier</span>
              </h1>
              <h3>
                <span>Full Stack Developer</span>
              </h3>
              <p>
                <ul className="fh5co-social-icons">
                  <li>
                    <a href="https://www.linkedin.com/in/bastien-chevallier/">
                      <i className="icon-linkedin2"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Bastorx">
                      <i className="icon-github2"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.npmjs.com/~bastorx">
                      <i className="icon-npm"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/cheval_b">
                      <i className="icon-twitter2"></i>
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
