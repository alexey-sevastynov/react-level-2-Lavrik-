import { RouteObject } from "react-router-dom";
import { A } from "../pages/A";
import { B } from "../pages/B";

const routes: RouteObject[] = [
  { path: "/", element: <A /> },
  { path: "/b", element: <B /> },
];

export default routes;
