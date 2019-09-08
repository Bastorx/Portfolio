import "./public/style/style.scss";

import { h, render } from "preact";
import { App } from "./containers/page/App";

render(<App />, document.getElementById("app"));
