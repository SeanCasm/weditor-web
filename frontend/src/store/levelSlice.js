import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  levelName: {},
  status: undefined,
  message: "",
};

export const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    onLoading: (state, { payload }) => {
      state.levelName = payload;
      state.status = "loading";
      state.message = "";
    },
    onLoadError: (state, { payload }) => {
      state.levelName = {};
      state.status = "noy-loaded";
      state.message = payload;
    },
    onLoadSuccess: (state, { payload }) => {
      state.levelName = "";
      state.status = "loaded";
      state.message = payload;
    },
    onUploading: (state, { payload }) => {
      state.levelName = payload;
      state.status = "uploading";
      state.message = "";
    },
    onUploadError: (state, { payload }) => {
      state.levelName = {};
      state.status = "not-uploaded";
      state.message = payload;
    },
    onUpload: (state, { payload }) => {
      state.levelName = payload.levelName;
      state.status = "checking";
      state.message = "Level correctly uploaded";
    },
  },
});
export const {
  onUploading,
  onUploadError,
  onUpload,
  onLoading,
  onLoadSuccess,
  onLoadError,
} = levelSlice.actions;
