import { observer } from "mobx-react";
import { useContext, useState } from "react";

import storeContext from "../contexts/store";

export const App = observer(() => {
  const store: any = useContext(storeContext);
  const [count, setCount] = useState(0);

  return (
    <div>
      Hello World! {count}
      <button type="button" onClick={() => setCount(count + 999)}>
        +999
      </button>
      <hr />
      {store.user.id}
    </div>
  );
});
