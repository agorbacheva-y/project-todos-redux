import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoData = [
  {
    id: uuidv4(),
    text: "14:00 Dentist",
    completed: false,
    created: "2023-11-01",
    due: "2023-11-15",
    priority: "high"
  },
  {
    id: uuidv4(),
    text: "Ship package",
    completed: false,
    created: "2023-11-05",
    due: "2023-11-30",
    priority: "medium"
  },
  {
    id: uuidv4(),
    text: "Christmas shopping",
    completed: false,
    created: "2023-11-10",
    due: "2023-12-15",
    priority: "high"
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
          due: action.payload.due,
          priority: action.payload.priority
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
    completeAll: (state) => {
      state.forEach((todo) => {
        todo.completed = true ;
      })
    }
  },
});

export const { addTodo, removeTodo, isCompleted, completeAll } = todoSlice.actions;
export default todoSlice.reducer;
