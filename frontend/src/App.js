import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.scss";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store";
// import "animate.css";
export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
};
