import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

import { NavbarActions } from "./NavbarActions";
import { useAuth } from "../../hooks/useAuth";
import "./navbarWE.scss";
export const NavbarWE = () => {
  const { status, user } = useAuth();
  const leftSideLinks = ["Explore", "About", "Download", "Support"];
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>WEditor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {leftSideLinks.map((l) => {
              return (
                <NavLink
                  key={l.toLowerCase()}
                  className={({ isActive }) =>
                    isActive ? "active" : "navlink"
                  }
                  to={l.toLowerCase()}
                >
                  {l}
                </NavLink>
              );
            })}
          </Nav>
          <Nav>
            {status === "authenticated" ? (
              <>
                <NavbarActions nickname={user.nickname} />
                <div className="bj-animation"></div>
              </>
            ) : (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "navlink"
                  }
                  to="register"
                >
                  Sign up
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "navlink"
                  }
                  to="login"
                >
                  Sign in
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
