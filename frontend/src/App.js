import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";

import "./styles/_styles.scss";
// import "animate.css";
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
