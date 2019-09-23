import { h, Component } from "preact";
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
    );
  }
}
