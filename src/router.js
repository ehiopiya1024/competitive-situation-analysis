import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";

import BaseLayout from "./components/layouts/BaseLayout";
import Exception from "./pages/exception";
import HomePage from "./pages/home/HomePage";
import DemoPage from "./pages/demo/DemoPage";
import SearchPage from "./pages/search/SearchPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <BaseLayout location={history.location}>
        <Switch>
          <Route path="/" render={() => <Redirect to="/home" />} exact />
          <Route path="/home" component={HomePage} exact />
          <Route
            path="/literature"
            render={() => <h1>literature....</h1>}
            exact
          />
          <Route path="/art" render={() => <h1>art....</h1>} exact />
          <Route
            path="/collection"
            render={() => <h1>collection....</h1>}
            exact
          />
          <Route path="/thought" render={() => <h1>thought....</h1>} exact />
          <Route path="/exception" component={Exception} />
          <Route path="/demo" component={DemoPage} exact />
          <Route path="/search" component={SearchPage} exact />
        </Switch>
      </BaseLayout>
    </Router>
  );
}

export default RouterConfig;
