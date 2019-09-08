import { h, Component } from "preact";

import {
  About,
  Work,
  Header,
  Resume,
  Features,
  Skills,
  HireMe,
  Blog,
  ContactForm
} from "..";

export class App extends Component {
  public componentDidMount() {
    $(window).stellar();

    // To fix

    // let i = 0;
    // $(".animate-box").waypoint(
    //   function(direction: any) {
    //     if (
    //       direction === "down" &&
    //       !$(this.element).hasClass("animated-fast")
    //     ) {
    //       i++;
    //       $(this.element).addClass("item-animate");
    //       setTimeout(function() {
    //         $("body .animate-box.item-animate").each(function(k: any) {
    //           const el = $(this);
    //           setTimeout(
    //             function() {
    //               const effect = el.data("animate-effect");
    //               if (effect === "fadeIn") {
    //                 el.addClass("fadeIn animated-fast");
    //               } else if (effect === "fadeInLeft") {
    //                 el.addClass("fadeInLeft animated-fast");
    //               } else if (effect === "fadeInRight") {
    //                 el.addClass("fadeInRight animated-fast");
    //               } else {
    //                 el.addClass("fadeInUp animated-fast");
    //               }

    //               el.removeClass("item-animate");
    //             },
    //             k * 100,
    //             "easeInOutExpo"
    //           );
    //         });
    //       }, 50);
    //     }
    //   },
    //   { offset: "85%" }
    // );
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
