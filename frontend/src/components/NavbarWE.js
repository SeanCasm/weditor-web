import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

export const NavbarWE = ({ nickname, status }) => {
  const { startLogout } = useAuth();
  const navigate = useNavigate();
  const onLogout = () => {
    startLogout();
    navigate("/login", { replace: true });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">WEditor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#home">Explore</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Download</Nav.Link>
            <Nav.Link href="#pricing">Support</Nav.Link>
          </Nav>
          <Nav>
            {status === "authenticated" ? (
              <>
                <Nav.Link>{nickname}</Nav.Link>
                <Nav.Link onClick={onLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Sign up</Nav.Link>
                <Nav.Link href="/home">Sign in</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavbarWE.propTypes = {
  nickname: PropTypes.string,
  status: PropTypes.string,
};
