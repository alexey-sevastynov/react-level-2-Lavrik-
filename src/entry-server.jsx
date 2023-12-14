import React from "react";
import ReactDOMServer from "react-dom/server";
import CreateApp from "./app";
import { StaticRouter } from "react-router-dom/server";

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter>
        <CreateApp />
      </StaticRouter>
    </React.StrictMode>
  );
  return { html };
}
