import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todoData = [
  {id: uuidv4(), text: "14:00 Dentist", completed: false, created: "", due: "" },
  {id: uuidv4(), text: "Ship package", completed: false, created: "", due: "" },
  {id: uuidv4(), text: "Christmas shopping", completed: false, created: "", due: "" },
];

export const todos = createSlice({
  name: 'todos',
  initialState: todoData,
  reducers: {
    addTodo: (state, action) => { //will add new todo for a second, but then disappears???
      return [ ...state, 
       {
          id: uuidv4(),
          text: action.payload,
          completed: false,
          created: "",
          due: ""
        }
      ];
    },
    removeTodo: (state, action) => {
      const existingTodo = state.todoData.find((todo) => todo.id === action.payload.id);

      if (existingTodo) {
        state.todoData = state.todoData.filter((todo) => todo.id !== action.payload.id);
      }
    }
  }
});