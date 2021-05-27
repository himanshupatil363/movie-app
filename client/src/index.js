import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Base from "./Base";
import {BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Base>
      <App />
    </Base>
  </Router>
  </React.StrictMode>,
  document.getElementById("root")
);