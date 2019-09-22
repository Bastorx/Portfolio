import { h } from "preact";

export const Features = () => (
  <div id="fh5co-features" className="animate-box">
    <div className="container">
      <div className="services-padding">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>My Services</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 text-center">
            <div class="feature-left">
              <span class="icon">
                <i class="icon-paintbrush"></i>
              </span>
              <div class="feature-copy">
                <h3>Front-End Integration</h3>
                <p>
                  Experienced in a lot of Front-End javascript technologies such
                  as React, Vue, Angular, JQuery and even VanillaJS.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="feature-left">
              <span className="icon">
                <i className="icon-bargraph"></i>
              </span>
              <div className="feature-copy">
                <h3>Web Development</h3>
                <p>
                  Experienced in a lot of Back-end technologies such as NodeJS,
                  Typescript, Go.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="feature-left">
              <span class="icon">
                <i class="icon-mobile"></i>
              </span>
              <div class="feature-copy">
                <h3>Mobile Development</h3>
                <p>
                  I worked a lot with technologies such as React-Native &
                  NativeScript.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="feature-left">
              <span className="icon">
                <i className="icon-cloud"></i>
              </span>
              <div className="feature-copy">
                <h3>Cloud solutions</h3>
                <p>
                  I worked with great cloud providers such as Google Cloud
                  Platform, AWS and Azure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="feature-left">
              <span className="icon">
                <i className="icon-search"></i>
              </span>
              <div className="feature-copy">
                <h3>Analytics | SEO | SEA</h3>
                <p>
                  My experience makes me learn about mains problems around
                  referencement and Data Analise. I mainly work with Google
                  tools to avoid any referencement problems.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="feature-left">
              <span className="icon">
                <i className="icon-chat"></i>
              </span>
              <div className="feature-copy">
                <h3>Support</h3>
                <p>
                  Availability and communication are really important. I can
                  provider supports solutions on each features I have worked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
