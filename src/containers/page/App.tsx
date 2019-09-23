import React, { Component, Suspense } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

import { contentWayPoint } from "../../helpers";

import {
  About,
  // Work,
  Header,
  Resume,
  Services,
  Skills,
  HireMe,
  Blog
  // ContactForm
} from "..";

export class App extends Component {
  public componentDidMount() {
    if (typeof $ !== "undefined") {
      $(window).stellar();

      // To fix
      contentWayPoint();
    }
  }
  public render() {
    return (
      <Suspense fallback="loading">
        <div id="page">
          <Header />
          <About />
          <Resume />
          <Services />
          <Skills />
          {/* <Work /> */}
          <Blog />
          <HireMe />
          {/* <ContactForm /> */}
        </div>
      </Suspense>
    );
  }
}

export default App;
