import { h, render } from "preact";
import { App } from "./containers/page/App";

if (window && window.location && window.location.host === "prerender") {
  require("./public/style/style.scss");
}

render(
  <App />,
  document.getElementById("app"),
  document.getElementById("page")
);
