import "./public/style/icomoon/fonts/icomoon.eot";
import "./public/style/icomoon/fonts/icomoon.svg";
import "./public/style/icomoon/fonts/icomoon.ttf";
import "./public/style/icomoon/fonts/icomoon.woff";

import "./public/style/animate/animate.scss";
import "./public/style/flexslider/flexslider.scss";
import "./public/style/icomoon/icomoon.scss";

import "./public/style/bootstrap/bootstrap.scss";

import "./public/style/style.scss";

import { h, render } from "preact";
import App from "./containers/App";

render(<App />, document.getElementById("app"));
