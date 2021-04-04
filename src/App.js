import React from "react";
import { Redirect, Route } from "react-router";
import { Switch } from "react-router-dom";

import "./App.css";
import Editorial from "./components/Editorial/Editorial";
import Navbar from "./components/Navbar/Navbar";

import Home from "./containers/home";
import Topics from "./containers/Topics";
import AllTopics from "./containers/AllTopics";
import User from "./containers/User";
import Search from './containers/Search';
import SingleCollection from './components/Collection/SingleCollection';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Editorial />
      </header>
      <main className="App-main">
        <Switch>
          <Route path="/s/:type/:sName" exact component={Search} />
          <Route path="/collections/:id" exact component={SingleCollection} />
          <Route path="/t" exact component={AllTopics} />
          <Route path="/t/:slug" exact component={Topics} />
          <Route path="/:user" component={User} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;

