import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // not-authenticated || authenticated || checking
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    chekingCredentials: (state) => {
      state.status = 'checking';
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated'; // not-authenticated || authenticated || checking
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    login: (state, { payload }) => {
      state.status = 'authenticated'; // not-authenticated || authenticated || checking
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    }
  }
});
export const { login, logout, chekingCredentials } = authSlice.actions;