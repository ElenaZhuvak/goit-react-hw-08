import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(register.fulfilled, (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = actions.payload.isLoggedIn;
    })
    .addCase(login.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = actions.payload.isLoggedIn;
      });
  },
});

export const authReducer = slice.reducer;
