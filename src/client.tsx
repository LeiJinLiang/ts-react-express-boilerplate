import * as React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Hello from "./containers/Hello";
export const Client = () => (
  <Router>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={Hello} />
  </Router>
);
