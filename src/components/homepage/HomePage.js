import React from "react";
import TodoList from "../list/TodoList";

const HomePage = () => {
  return (
    <div>
      <h1>My Movie Collection Demo</h1>
      <h2>Click on Image to see detail</h2>
      <TodoList />
    </div>
  );
};

export default HomePage;
