import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todos } from "./reducers/todos";

const reducer = combineReducers({
  todos: todos.reducer,
});

export const store = configureStore({ reducer });
