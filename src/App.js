import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Template from "./components/Template";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Template>
        <Input />
        <TodoList />
      </Template>
    </div>
  );
}

export default App;
