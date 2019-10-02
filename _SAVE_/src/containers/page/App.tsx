import React, { Component, Suspense } from "react";

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
  public render() {
    return (
      <Suspense fallback={<div className="fh5co-loader"></div>}>
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
