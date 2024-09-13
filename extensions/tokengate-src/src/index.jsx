import React from "react";
import ReactDOM from "react-dom";

import "@shopify/connect-wallet/styles.css";
import "@shopify/tokengate/styles.css";

import { App } from "./App";

// The element id is defined in app-block.liquid
const container = document.getElementById("tokengating-example-app");

if (true) {
  ReactDOM.createRoot(container).render(<div>Hello from React</div>);
} else {
  container.innerHTML = "This product is not gated.";
}
