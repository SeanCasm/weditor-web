import React from "react";
import { Routes, Route, Router, Link } from "react-router";
import { Login } from "../components/Login/Login";
import { Home } from "../components/Home/Home";
import { BrowserRouter } from "react-router-dom";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
