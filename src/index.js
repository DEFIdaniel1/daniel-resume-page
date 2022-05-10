import "./custom.scss";
import "bootstrap-icons/font/bootstrap-icons.css";


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./Components/UI/ScrollToTop";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
