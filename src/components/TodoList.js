import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  /*const completeHandeler = (todo) => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) {
          return { ...item, complete: !todo.complete };
        } else {
          return { ...item };
        }
      })
    );
  };

  const deleteHandeler = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  
  //수정기능 미완성
  const editTextHandeler = (todo, editInput) => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) {
          console.log("아무거나");
          return { ...item, text: editInput, editable: !todo.editable };
        } else {
          return { ...item };
        }
      })
    );

    console.log("수정");
    //editableHandeler();
  };*/

  const todos = useSelector((state) => state.todos);

  return (
    <div className="todobox">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
