import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";

import BaseLayout from "./components/layouts/BaseLayout";
import Exception from "./pages/exception";
import DemoPage from "./pages/demo/DemoPage";
import SearchPage from "./pages/search/SearchPage";

import UserInfo from "./pages/userInfo/UserInfo";
import Login from "./pages/login/Login";

import HomePage from "./pages/home/HomePage";
import LiteraturePage from "./pages/literature/LiteraturePage";
import ArtPage from "./pages/art/ArtPage";
import CollectionPage from "./pages/collection/CollectionPage";
import ThoughtPage from "./pages/thought/ThoughtPage";
import TagSearchPage from "./pages/tagSearch/TagSearchPage";
import ArticlePage from "./pages/article/ArticlePage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <BaseLayout location={history.location}>
        <Switch>
          <Route path="/" render={() => <Redirect to="/home" />} exact />
          <Route path="/home" component={HomePage} exact />
          <Route path="/literature" component={LiteraturePage} exact />
          <Route path="/art" component={ArtPage} exact />
          <Route path="/collection" component={CollectionPage} exact />
          <Route path="/thought" component={ThoughtPage} exact />

          <Route path="/exception" component={Exception} />
          <Route path="/demo" component={DemoPage} exact />
          <Route path="/search" component={SearchPage} exact />

          <Route path="/user" component={UserInfo} exact />
          <Route path="/login" component={Login} exact />

          <Route path="/tags/:tagName" component={TagSearchPage} />
          <Route path="/article/:title" component={ArticlePage} />
        </Switch>
      </BaseLayout>
    </Router>
  );
}

export default RouterConfig;
