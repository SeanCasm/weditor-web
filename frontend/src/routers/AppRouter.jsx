import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { NavbarWE } from "../components/Navbar/NavbarWE";
import { Container } from "react-bootstrap";
import { UploadLevel } from "../components/UploadLevel/UploadLevel";
import { LevelScreen, Account, Profile } from "../components/Profile";
import { Home } from "../components/Home";
import { HomeCreator } from "../components/HomeCreator/HomeCreator";
import { Login, Register } from "../components/Auth";
import { LevelSettings } from "../components/Level/LevelSettings";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuth();
  useEffect(() => {
    checkAuthToken();
  }, []);
  return (
    <>
      <NavbarWE />
      <Container className="mt-5 background p-3">
        <Routes>
          {status === "not-authenticated" ? (
            <>
              <Route path="home" element={<Home />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="*" element={<Navigate to="home" />}></Route>
            </>
          ) : (
            <>
              <Route path="main" element={<HomeCreator />}></Route>
              <Route path="profile" element={<Profile />}>
                <Route path="account" element={<Account />}></Route>
                <Route path="myLevels" element={<LevelScreen />}></Route>
                <Route path="*" element={<Navigate to="account" />}></Route>
              </Route>
              <Route path="upload" element={<UploadLevel />}></Route>
              <Route path="*" element={<Navigate to="main" />}></Route>
            </>
          )}
        </Routes>
      </Container>
    </>
  );
};
