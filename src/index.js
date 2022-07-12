import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//importing bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//leaving the default, but do i want to change to ReactDOM.render??
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals();
