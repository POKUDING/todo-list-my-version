import React from "react";
import Input from "./Input";
import TodoList from "./TodoList";

const Template = ({ children }) => {
  return (
    <div className="Template">
      <header>
        <h1>Todo-List</h1>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Template;
