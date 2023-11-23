// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

const initialState = [];

export const addTodo = (title, body) => {
  return {
    type: ADD_TODO,
    payload: {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

export const switchTodo = (id) => {
  return {
    type: SWITCH_TODO,
    payload: {
      id,
    },
  };
};

// 리듀서
const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, payload];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== payload.id);

    case "SWITCH_TODO":
      const todo = state.find((todo) => todo.id === payload.id);
      todo.isDone = !todo.isDone;
      return [...state];

    default:
      return state;
  }
};

export default todos;
