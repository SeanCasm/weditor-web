import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  status: undefined,
  errorMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onLoggedUser: (state, { payload }) => {
      console.log(payload);
      state.user = payload;
      state.status = "authenticated";
      state.errorMessage = "";
    },
    onLogError: (state, { payload }) => {
      state.user = {};
      state.status = "not-authenticated";
      state.errorMessage = payload;
    },
    onChecking: (state, { payload }) => {
      state.user = {};
      state.status = "checking";
      state.errorMessage = payload;
    },
  },
});

export const { onLoggedUser, onLogError, onChecking } = userSlice.actions;
