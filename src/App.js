import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./resources/styles.css";
import HomePage from "./components/homepage/HomePage";
import FilmDetail from "./components/detail/FilmDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/:movieId" component={FilmDetail} exact />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
