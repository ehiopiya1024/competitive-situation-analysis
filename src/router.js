import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";

import BaseLayout from "./components/layouts/BaseLayout";
import Exception from "./pages/exception";
import DemoPage from "./pages/demo/DemoPage";
import SearchPage from "./pages/search/SearchPage";
import ArticlePage from "./components/articles/ArticlePage";

import UserInfo from "./pages/userInfo/UserInfo";
import Login from "./pages/login/Login";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <BaseLayout location={history.location}>
        <Switch>
          <Route
            path="/"
            render={() => <Redirect to="/articles/home" />}
            exact
          />
          <Route path="/articles/:type" component={ArticlePage} />
          <Route path="/exception" component={Exception} />
          <Route path="/demo" component={DemoPage} exact />
          <Route path="/search" component={SearchPage} exact />

          <Route path="/user" component={UserInfo} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </BaseLayout>
    </Router>
  );
}

export default RouterConfig;
