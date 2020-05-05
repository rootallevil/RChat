import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Register from "./components/pages/Register";
import ChatScreen from "./components/pages/ChatScreen";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/:username" component={ChatScreen} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
