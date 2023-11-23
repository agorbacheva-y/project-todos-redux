import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";

const reducer = combineReducers({
  todos: todoReducer,
});

export const store = configureStore({ reducer });
