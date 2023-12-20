import { observer } from "mobx-react";
import { useContext, useState } from "react";

import storeContext from "../contexts/store";
import { Link, useRoutes } from "react-router-dom";

import routes from "../routes";
import { Counter } from "./Counter";

export const App = observer(() => {
  const pages = useRoutes(routes);
  const store: any = useContext(storeContext);
  const [count, setCount] = useState(0);

  return (
    <div>
      Hello World!
      <Counter />
      <Link to={"/"}>Page A</Link>
      <Link to={"/b"}>Page B</Link>
      <hr />
      {store.user.id}
      <hr />
      {pages}
    </div>
  );
});
