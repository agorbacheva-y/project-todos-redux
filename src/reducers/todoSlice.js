import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoData = [
  {
    id: uuidv4(),
    text: "14:00 Dentist",
    completed: false,
    created: "",
    due: "",
  },
  {
    id: uuidv4(),
    text: "Ship package",
    completed: false,
    created: "",
    due: "",
  },
  {
    id: uuidv4(),
    text: "Christmas shopping",
    completed: false,
    created: "",
    due: "",
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: todoData,
  reducers: {
    addTodo: (state, action) => {
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.payload.text,
          completed: false,
          created: action.payload.time,
          due: "",
        },
      ];
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    isCompleted: (state, action) => {
      // find index of todo item to update
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
      }
    },
    completeAll: (state, action) => {
      state.forEach((todo) => {
        todo.completed = action.payload;
      })
    }
  },
});

export const { addTodo, removeTodo, isCompleted, completeAll } = todoSlice.actions;
export default todoSlice.reducer;
