import { h, Component } from "preact";
import { contentWayPoint } from "../../helpers";

import {
  About,
  // Work,
  Header,
  Resume,
  // Features,
  Skills,
  HireMe
  // Blog,
  // ContactForm
} from "..";

export class App extends Component {
  public componentDidMount() {
    $(window).stellar();

    // To fix
    contentWayPoint();
  }
  public render() {
    return (
      <div id="page">
        <Header />
        <About />
        <Resume />
        {/* <Features /> */}
        <Skills />
        {/* <Work /> */}
        {/* <Blog /> */}
        <HireMe />
        {/* <ContactForm /> */}
      </div>
    );
  }
}
