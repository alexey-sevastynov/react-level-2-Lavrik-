import React from "react";
import ReactDOMServer from "react-dom/server";
import CreateApp from "./app";

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <CreateApp />
    </React.StrictMode>
  );
  return { html };
}
