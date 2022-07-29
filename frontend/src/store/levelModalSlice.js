import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const levelModalSlice = createSlice({
  name: "levelModal",
  initialState,
  reducers: {
    onModalDisplay: (state, { payload }) => {
      state.status = true;
    },
    onModalHide: (state, { payload }) => {
      state.status = false;
    },
  },
});
export const { onModalDisplay, onModalHide } = levelModalSlice.actions;
