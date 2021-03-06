/* 액선 정의 */
const TODO_INSERT = "TODO/INSERT";
const TODO_REMOVE = "TODO/REMOVE";
const TODO_UPDATE = "TODO/UPDATE";
const TODO_TOGGLE = "TODO/TOGGLE";
const TODO_EDIT = "TODO/EDIT";

/* 액션 생성 함수 */
export const todoInsert = (id, text) => {
  return {
    type: TODO_INSERT,
    payload: {
      id: id,
      text: text,
      isCompleted: false,
      editable: false,
    },
  };
};

export const todoEdit = (id) => {
  return {
    type: TODO_EDIT,
    payload: { id: id },
  };
};

export const todoRemove = (id) => {
  return {
    type: TODO_REMOVE,
    payload: { id: id },
  };
};

export const todoUpdate = (id, text) => {
  return {
    type: TODO_UPDATE,
    payload: { id: id, text: text, editable: false },
  };
};

export const todoToggle = (id) => {
  return {
    type: TODO_TOGGLE,
    payload: { id: id },
  };
};

const initState = {
  todos: [
    /*{
      id: 1,
      text: "TODOLIST 만들기",
      isCompleted: false,
      editable: false,
    },*/
  ],
};

/* 리듀서 생성 */
export default function todoReducer(state = initState, { type, payload }) {
  switch (type) {
    case TODO_INSERT:
      return {
        ...state,
        todos: state.todos.concat({
          id: payload.id,
          text: payload.text,
          isCompleted: false,
          editable: false,
        }),
      };

    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };

    case TODO_UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, text: payload.text, editable: payload.editable }
            : todo
        ),
      };

    case TODO_TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };

    case TODO_EDIT:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, editable: !todo.editable } : todo
        ),
      };

    default:
      return { ...state };
  }
}
