import React from "react";
import { Switch, Route, useLocation } from "wouter";

import Home from "../pages/home";
import About from "../pages/about";
import Failure from "../pages/failure";
import Computer from "../pages/computer";
import Internet from "../pages/internet";
import Social from "../pages/social";
import Siteception from "../pages/applications/siteception";

import { AnimatePresence } from "framer-motion";

/**
 * The router is imported in app.jsx
 *
 * Each route is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <AnimatePresence exitBeforeEnter>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/f" component={Failure} />
      <Route path="/c" component={Computer} />
      <Route path="/i" component={Internet} />
      <Route path="/s" component={Social} />

      <Route path="/sc" component={Siteception} />
    </Switch>
  </AnimatePresence>
);
