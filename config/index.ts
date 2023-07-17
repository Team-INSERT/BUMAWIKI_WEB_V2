const createConfig = () => {
  return {
    clientUrl: typeof window !== "undefined" ? window.location.origin : "",
    serviceName: "BUMAWIKI",
  };
};

export default createConfig();
