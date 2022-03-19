import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoEdit, todoRemove, todoToggle, todoUpdate } from "../store";

const Todo = ({ todo }) => {
  const [editInput, setEditInput] = useState("");
  const dispatch = useDispatch();
  const { id, text, isCompleted, editable } = todo;

  const editInputHandeler = (e) => {
    setEditInput(e.target.value);
  };

  return (
    <div className="todo">
      <div className={`todoItem ${isCompleted ? `complete` : ``}`}>
        {editable ? (
          <div className="editbox">
            <input
              onChange={editInputHandeler}
              type="text"
              className="editInputBox"
              placeholder={text}
            />
            <button
              onClick={
                editInput
                  ? () => dispatch(todoUpdate(id, editInput))
                  : () => dispatch(todoEdit(id))
              }
              className="editBtn"
              type="submit"
            >
              수정
            </button>
          </div>
        ) : (
          <span onDoubleClick={() => dispatch(todoEdit(id))}>{text}</span>
        )}
      </div>
      <button
        onClick={() => dispatch(todoToggle(id))}
        className="completeCheckBtn"
      >
        체크
      </button>
      <button onClick={() => dispatch(todoRemove(id))} className="deleteBtn">
        삭제
      </button>
    </div>
  );
};

export default Todo;
