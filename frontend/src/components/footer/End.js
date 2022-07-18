import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export const End = () => {
  return (
    <Navbar bg="dark" variant="dark" className="end-page">
      <Nav className="m-auto">
        <Nav.Link href="#home">Explore</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Support</Nav.Link>
        <Nav.Link href="#pricing">Go up</Nav.Link>
      </Nav>
    </Navbar>
  );
};
