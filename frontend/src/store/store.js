import { configureStore } from "@reduxjs/toolkit";
import { levelSlice } from "./levelSlice";
import { userSlice } from "./userSlice";
export const store = configureStore({
  reducer: { user: userSlice.reducer, level: levelSlice.reducer },
});
