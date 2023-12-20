import { observer } from "mobx-react-lite";
import { useContext } from "react";

import storeContext from "../contexts/store";

export const Counter = observer(() => {
  const store: any = useContext(storeContext);

  const countValue = store.Count.count;
  const countTotal = store.Count.total;

  return (
    <div>
      <button type="button" onClick={() => store.Count.increment(1)}>
        +
      </button>
      <span>{countValue}</span>
      <button
        type="button"
        onClick={() => store.Count.decrement(1)}
        disabled={countValue === 0}
      >
        -
      </button>

      <p>total: {countTotal}</p>
    </div>
  );
});
