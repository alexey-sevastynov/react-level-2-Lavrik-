function createJobsApi(http: any) {
  return {
    async all() {
      return (await http.get("jobs")).data;
    },
  };
}

export default createJobsApi;
