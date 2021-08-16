import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";

it("Renders app sidebar for data visualizer with no errors or issues", () => {
  const div = document.createElement("div");
  // const appSidebar
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
