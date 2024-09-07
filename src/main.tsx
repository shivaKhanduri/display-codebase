import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { initGA } from "./util/analytics.ts"; // Import the analytics initialization function
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

initGA("G-VMM0XETFYZ");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
