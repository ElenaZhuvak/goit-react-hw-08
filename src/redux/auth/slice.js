import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {
        state.isLoggedIn = false;
      })

      .addCase(login.fulfilled, (state, actions) => {
        state.user = actions.payload.user;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, state => {
        state.isLoggedIn = false;
      })

      .addCase(logout.fulfilled, () => initialState)
      .addCase(logout.rejected, state => {
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoggedIn = true
        state.isRefreshing = false 
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true 
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false 
      })
  },
});

export const authReducer = slice.reducer;
