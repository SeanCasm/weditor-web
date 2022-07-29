import { configureStore } from "@reduxjs/toolkit";
import { levelModalSlice } from "./levelModalSlice";
import { levelSlice } from "./levelSlice";
import { userSlice } from "./userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    level: levelSlice.reducer,
    levelModal: levelModalSlice.reducer,
  },
});
