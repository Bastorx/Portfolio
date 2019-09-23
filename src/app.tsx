import React from "react";
import { render } from "react-dom";
import App from "./containers/page/App";
import "./public/style/style.scss";

import "./helpers/i18n";

render(<App />, document.getElementById("app"));
