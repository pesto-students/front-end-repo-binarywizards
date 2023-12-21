const prefix = "api/v1";

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
  templates: {
    get: routeMap("/templates"),
  },
};

export { api };
