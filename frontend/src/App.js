import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/_styles.scss";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store";
// import "animate.css";
export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
