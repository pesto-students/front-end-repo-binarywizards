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
    profile: routeMap("/users"),
  },
  templates: {
    get: routeMap("/templates"),
    getAll: routeMap("/templates"),
  },
  resume: {
    create: routeMap("/resumes"),
    update: routeMap("/resumes"),
    get: routeMap("/resumes"),
    getAll: routeMap("/resumes/user/all"),
  },
};

export { api };
