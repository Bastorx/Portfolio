import { h } from "preact";

export const About = () => (
  <div id="fh5co-about" className="animate-box">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 col-lg-4">
          <ul className="info">
            <li>
              <span className="first-block">Full Name:</span>
              <span className="second-block">Bastien Chevallier</span>
            </li>
            <li>
              <span className="first-block">Phone:</span>
              <span className="second-block">(+33) 6 12 15 74 63</span>
            </li>
            <li>
              <span className="first-block">Email:</span>
              <span className="second-block">me@bastienchevallier.com</span>
            </li>
            <li>
              <span className="first-block">Website:</span>
              <span className="second-block">www.bastienchevallier.com</span>
            </li>
            <li>
              <span className="first-block">Address:</span>
              <span className="second-block">
                4 Rue de la Huchette, 75005 Paris
              </span>
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-lg-8">
          <h2>Hello There!</h2>
          <p>
            I am a full stack developer. After five years of study at ETNA. I
            specialized around Javascript in web development (back-end and
            front-end). Loving technologies such as React, React-Native,
            Typescript, Docker, Kubernetes. I have acquired a wide range of
            skills that allow me to work on the web, mobile, or to set up
            micro-services architectures.
          </p>
          <p>
            I only work in Full Remote.
            <br />
            <br />
          </p>
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
);
