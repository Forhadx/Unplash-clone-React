import React, { Suspense } from "react";
import { Redirect, Route } from "react-router";
import { Switch } from "react-router-dom";

import "./App.css";
import Editorial from "./components/Editorial/Editorial";
import Navbar from "./components/Navbar/Navbar";

import Home from "./containers/home";

const Topics = React.lazy(() => {
  return import("./containers/Topics");
});

const AllTopics = React.lazy(() => {
  return import("./containers/AllTopics");
});

const User = React.lazy(() => {
  return import("./containers/User");
});

const Search = React.lazy(() => {
  return import("./containers/Search");
});

const SingleCollection = React.lazy(() => {
  return import("./components/Collection/SingleCollection");
});

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Editorial />
      </header>
      <main className="App-main">
        <Suspense fallback="loading...">
          <Switch>
            <Route
              path="/s/:type/:sName"
              exact
              render={(props) => <Search {...props} />}
            />
            <Route
              path="/collections/:id"
              exact
              render={(props) => <SingleCollection {...props} />}
            />
            <Route
              path="/t"
              exact
              render={(props) => <AllTopics {...props} />}
            />
            <Route
              path="/t/:slug"
              exact
              render={(props) => <Topics {...props} />}
            />
            <Route path="/:user" render={(props) => <User {...props} />} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
};

export default App;

