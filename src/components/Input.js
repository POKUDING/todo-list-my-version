import React from "react";
import { useState } from "react";
import store from "../store";
import { useDispatch, useSelector } from "react-redux";
import { todoInsert } from "../store";

const Input = () => {
  const [inputState, setInputState] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const inputStateHandeler = (e) => {
    setInputState(e.target.value);
    console.log(inputState);
  };

  const inputTextHandeler = (e) => {
    e.preventDefault();

    let num = 2;

    if (inputState !== "") {
      const makeId = () => {
        if (todos.length > 0) {
          num = todos[todos.length - 1].id + 1;
        }
      };

      makeId();

      dispatch(todoInsert(num, inputState));
    } else {
      alert("할일을 입력해 주세요.");
    }

    setInputState("");
  };

  return (
    <div className="Input">
      <form>
        <input
          value={inputState}
          placeholder="할일을 입력해 주세요."
          onChange={inputStateHandeler}
          type="text"
          className="todo-input"
        />
        <button onClick={inputTextHandeler} type="submit">
          추가
        </button>
      </form>
    </div>
  );
};

export default Input;
