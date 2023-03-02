# nimblerouter

A lightweight and fast router library for single-page applications (SPAs) built for JavaScript frameworks like React, Angular, and Vue.

## Installation

You can install the nimblerouter library using npm:
`npm install nimblerouter`

## Usage

To use the nimblerouter library in your JavaScript project, you can import it like this:

```
import Router from 'nimblerouter';

const router = new Router();

router.addRoute('/', () => {
  console.log('Home page');
});

router.addRoute('/about', () => {
  console.log('About page');
});

router.navigate();
```

In this example, we're creating a new Router instance, adding two routes with callback functions, and calling the navigate method to execute the callback function for the current path. If the current path is /, the Home page message will be logged to the console. If the current path is /about, the About page message will be logged to the console. If the current path doesn't match any of the defined routes, an error message will be logged to the console.

For a real SPA built with React, you would typically use a client-side routing library like react-router-dom to handle the routing without reloading the page. Here's an example of how you might use the nimblerouter library with react-router-dom:

```
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Router from 'nimblerouter';

const router = new Router();

router.addRoute('/', () => {
  console.log('Home page');
});

router.addRoute('/about', () => {
  console.log('About page');
});

function App() {
  useEffect(() => {
    router.navigate();
  }, []);

  return (
    <Router>
      <div>
        <h1>My SPA</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Route exact path="/" component={() => null} />
        <Route exact path="/about" component={() => null} />
      </div>
    </Router>
  );
}

export default App;
```

In this example, we're using nimblerouter to define the routes and execute the appropriate code based on the current route, and we're using react-router-dom to handle the routing between the home and about pages. We're also using the useEffect hook to call the router.navigate() method when the component mounts, which will execute the appropriate code based on the current route.

## License

This library is licensed under the MIT License.
