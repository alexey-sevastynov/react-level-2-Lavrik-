import createJobsApi from "./jobs";

function createApi(http: any) {
  return { jobs: createJobsApi(http) };
}

export default createApi;
