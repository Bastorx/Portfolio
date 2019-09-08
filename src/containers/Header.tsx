import { h, Component } from "preact";

const isMobile = {
  Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any() {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};

export class Header extends Component {
  public componentDidMount() {
    if (!isMobile.any()) {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(() => {
        $(".js-fullheight").css("height", $(window).height());
      });
    }
  }
  public render() {
    return (
      <header
        id="fh5co-header"
        className="fh5co-cover js-fullheight"
        role="banner"
        style={{
          backgroundImage: `url(${require("../public/images/cover.jpg")}`
        }}
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
                    style={{
                      background: `url(${require("./bastien.jpg")}`
                    }}></div>
                  <h1>
                    <span>Bastien Chevallier</span>
                  </h1>
                  <h3>
                    <span>Full Stack Developer</span>
                  </h3>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
