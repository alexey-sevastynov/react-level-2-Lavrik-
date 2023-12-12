import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Hello World! {count}
      <button type="button" onClick={() => setCount(count + 999)}>
        +999
      </button>
    </div>
  );
};
