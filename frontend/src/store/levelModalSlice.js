import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  levelName: "",
  description: "",
  msg: "",
};

export const levelModalSlice = createSlice({
  name: "levelModal",
  initialState,
  reducers: {
    onModalDisplay: (state, { payload }) => {
      state.status = true;
      state.levelName = payload.levelName;
      state.description = payload.description;
    },

    onModalHide: (state, { payload }) => {
      state.status = false;
      state.levelName = "";
      state.description = "";
    },
    onSaveError: (state, { payload }) => {
      state.status = false;
      state.msg = payload;
    },
  },
});
export const { onModalDisplay, onModalHide, onSaveError } =
  levelModalSlice.actions;
