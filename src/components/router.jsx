import * as React from "react";
import { Switch, Route } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Failure from "../pages/failure";
import Computer from "../pages/computer";
import Internet from "../pages/internet";
import Social from "../pages/social";
import Siteception from "../pages/applications/siteception";

/**
 * The router is imported in app.jsx
 *
 * Our site just has many routes
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/f" component={Failure} />
    <Route path="/c" component={Computer} />
    <Route path="/i" component={Internet} />
    <Route path="/s" component={Social} />

    <Route path="/sc" component={Siteception} />
  </Switch>
);
