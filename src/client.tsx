import * as React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "./components/Home";
const Hello = React.lazy(() => import("./containers/Hello"));
import { RemoteContainer } from "./containers/Remote";
import { NotFound } from "./components/404";
export const Client = () => (
  <Router>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/books">Books</Link>
    </p>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Hello} />
        <Route path="/books" component={RemoteContainer} />
        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  </Router>
);
