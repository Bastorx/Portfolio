import React from "react";
import { render } from "react-dom";
import App from "./containers/page/App";

if (window && window.location && window.location.host !== "prerender") {
  require("./public/style/style.scss");
}
import "./helpers/i18n";

render(<App />, document.getElementById("app"));
