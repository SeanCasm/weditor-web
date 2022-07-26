import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { Home, HomeCreator, Login, Register } from "../components/pages";
import { Profile } from "../components/Profile/Profile";
import { NavbarWE } from "../components/Navbar/NavbarWE";

export const AppRouter = () => {
  const { status, checkAuthToken, user } = useAuth();
  useEffect(() => {
    checkAuthToken();
  }, []);
  return (
    <>
      <NavbarWE nickname={user.nickname} status={status} />
      <h1>{status}</h1>
      <Routes>
        {status === "not-authenticated" ? (
          <>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="*" element={<Navigate to="home" />}></Route>
          </>
        ) : (
          <>
            <Route path="profile" element={<Profile />} />
            <Route path="main" element={<HomeCreator />} />
            <Route path="*" element={<Navigate to="main" />} />
          </>
        )}
      </Routes>
    </>
  );
};
