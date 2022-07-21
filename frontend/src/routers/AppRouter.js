import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { NavbarWE } from "../components/NavbarWE";
import { Home, HomeCreator, Login } from "../components/pages";

export const AppRouter = () => {
  const { status, checkAuthToken, user } = useAuth();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <div>Loading...</div>
  }

  return (
    <>
      <NavbarWE nickname={user.nickname} status={status} />
      <Routes>
        {status === "not-authenticated" ? (
          <>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="/*" element={<Navigate to="/home" />}></Route>
          </>
        ) : (
          <>
            <Route path="/homecreator" element={<HomeCreator />}></Route>
            <Route path="/" element={<Navigate to="/homecreator" />}></Route>
            <Route path="/*" element={<Navigate to="/homecreator" />}></Route>
          </>
        )}
      </Routes>
    </>
  );
};
