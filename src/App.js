import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Switch} from "react-router";
import React from "react";
import Home from "./components/Website/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
