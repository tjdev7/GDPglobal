import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";

it("renders sidebar for data visualizer with no errors", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
