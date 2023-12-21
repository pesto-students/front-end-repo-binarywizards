const domain = "http://localhost:3000/";
const prefix = "api/v1";

function routeMap(path) {
  return `${prefix}${path}`;
}

const api = {
  auth: {
    login: routeMap("/auth/login"),
    signUp: routeMap("/auth/signup"),
  },
  user: {
    profile: routeMap("/user"),
  },
  templates: {
    get: routeMap("/templates"),
  },
};

export { api };
