const prefix = "api/v1";
const domain = 'http://localhost:3000/';

function routeMap(path) {
  return `${domain}${prefix}${path}`;
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
  resume: {
    create: routeMap("/resumes"),
    update: routeMap("/resumes"),
    get: routeMap("/resumes"),
    getAll: routeMap("/resumes"),
  },
};

export { api };
