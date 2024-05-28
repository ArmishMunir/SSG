import React from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

if (rootElement.hasChildNodes()) {
  root.hydrate(<App />, rootElement);
} else {
  root.render(<App />);
}
