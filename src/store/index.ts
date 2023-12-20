import CounterStore from "./count";
import User from "./user";

function createRootStore() {
  const rootStore = {
    user: new User(),
    Count: new CounterStore(),
  };

  return rootStore;
}

export default createRootStore;
