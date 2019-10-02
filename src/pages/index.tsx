import React, { Component } from "react";
import Layout from "../components/Layout";
import {
  About,
  Blog,
  // ContactForm
  Header,
  HireMe,
  Resume,
  Services,
  Skills,
  // Work,
} from "../containers";

export class App extends Component {
  public render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}

export default App;
