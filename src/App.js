import React from "react";
import { Route } from "react-router";
import { Switch } from 'react-router-dom';

import "./App.css";
import Editorial from "./components/Editorial/Editorial";
import Navbar from "./components/Navbar/Navbar";

import Home from "./containers/home";
import Topics from "./containers/Topics";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Editorial />
      </header>
      <main className="App-main">
        <Switch>
          <Route path="/t/:id/:title" component={Topics} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
