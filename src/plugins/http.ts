import axios from "axios";

function createHttpPlugins(baseURL: string) {
  const http = axios.create({
    baseURL,
    timeout: 10000,
  });

  return http;
}

export default createHttpPlugins;
