import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todos } from "./reducers/todoSlice";
import { hide } from "./reducers/hideSlice";

const reducer = combineReducers({
  todos: todos.reducer,
  hide: hide.reducer
});

export const store = configureStore({ reducer });
