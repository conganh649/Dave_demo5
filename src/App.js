import React, { Component } from "react";

import "./resources/styles.css";
import TodoList from "./components/list/TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Movie Collection Demo</h1>
        <h2>Click on movie to remove it from collection</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
