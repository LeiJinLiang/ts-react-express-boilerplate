import * as React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import asyncComponent from "./asyncComponent";
import { Home } from "./components/Home";
import { LazyImage } from "./components/LazyImage/LazyImage";
import "./styles/app.css";
const Hello = asyncComponent(() =>
  import(/* webpackChunkName: 'about' */ "./containers/Hello")
);
const RemoteContainer = asyncComponent(() =>
  import(/* webpackChunkName: 'books' */ "./containers/Remote")
);
import { NotFound } from "./components/404";
export const Client = () => (
  <Router>
    <div className="nav">
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/books">Books</Link>
      </p>
      <p>
        <Link to="/picture">picture</Link>
      </p>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={Hello} />
      <Route path="/books" component={RemoteContainer} />
      <Route path="/picture" component={LazyImage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
