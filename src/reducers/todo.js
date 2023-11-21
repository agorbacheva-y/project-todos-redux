import { createSlice } from '@reduxjs/toolkit';

const todoData = [
  {id: 1, text: "14:00 Dentist", completed: false, created: "", due: "" },
  {id: 2, text: "Ship package", completed: false, created: "", due: "" },
  {id: 3, text: "Christmas shopping", completed: false, created: "", due: "" },
];

export const todos = createSlice({
  name: 'todos',
  initialState: todoData,
  reducers: {
    addTodo: (state, action) => {
      // add todo
    },
    removeTodo: (state, action) => {
      // remove todo
    }
  }
});