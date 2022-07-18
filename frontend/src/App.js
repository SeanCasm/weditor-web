import React from "react";

import { AppRouter } from "./routers/AppRouter";
import "./styles/_styles.scss";
import NavbarWE from "./components/Navbar/NavbarWE";
// import "animate.css";
function App() {
  return (
    <>
      <NavbarWE></NavbarWE>
      <AppRouter />
    </>
  );
}

export default App;
