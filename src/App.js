import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Template from "./components/Template";
import TodoList from "./components/TodoList";

function App() {
  const [inputState, setInputState] = useState({ inputBox: "", editBox: "" });
  return (
    <div className="App">
      <Template>
        <Input inputState={inputState} setInputState={setInputState} />
        <TodoList inputState={inputState} setInputState={setInputState} />
      </Template>
    </div>
  );
}

export default App;
