const prefix = "api";

function routeMap(path) {
  return `${prefix}${path}`;
}

const api = {
  auth: {
    login: routeMap("/auth/login"),
  },
  user: {
    profile: routeMap("/user"),
  },
};

export { api };
