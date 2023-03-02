class Router {
  constructor() {
    this.routes = {};
  }

  addRoute(path, callback) {
    this.routes[path] = callback;
  }

  navigate() {
    const path = window.location.pathname;
    const callback = this.routes[path];
    if (callback) {
      callback();
    } else {
      console.error(`Route not found for ${path}`);
    }
  }
}

export default Router;
