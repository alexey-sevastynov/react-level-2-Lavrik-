import React from "react";
import ReactDOM from "react-dom/client";
import CreateApp from "./app";
import { BrowserRouter } from "react-router-dom";

(async function () {
  const app = await CreateApp();

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <BrowserRouter>{app}</BrowserRouter>
    </React.StrictMode>
  );
})();
