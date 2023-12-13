import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import CreateApp from "./app";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <CreateApp />
  </React.StrictMode>
);
