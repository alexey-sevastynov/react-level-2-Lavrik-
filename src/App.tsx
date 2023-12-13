import createApi from "./api";
import jobs from "./api/jobs";
import { App } from "./components/App";
import storeContext from "./contexts/store";
import createHttpPlugins from "./plugins/http";

import createRootStore from "./store";

function CreateApp() {
  const http = createHttpPlugins("https://api-table-for-the-driver.vercel.app");
  const api = createApi(http);
  const rootStore: any = createRootStore();

  http.interceptors.request.use((config) => {
    console.log("1:", config);
    return config;
  });

  api.jobs.all();

  const app = (
    <storeContext.Provider value={rootStore}>
      <App />
    </storeContext.Provider>
  );

  return app;
}

export default CreateApp;
