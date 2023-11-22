import { createSlice } from '@reduxjs/toolkit';

export const hide = createSlice({
  name: 'hide',
  initialState: {
    hidden: false
  },
  reducers: {
    isCompleted: (state) => {
      state.hidden = !state.hidden;
    }
  }
});