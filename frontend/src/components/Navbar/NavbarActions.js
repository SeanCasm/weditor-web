import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PropTypes } from "prop-types";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export const NavbarActions = ({ nickname, img }) => {
  const { startLogout } = useAuth();
  const navigate = useNavigate();
  const onLogout = () => {
    startLogout();
    navigate("/login", { replace: true });
  };
  return (
    <>
      <NavDropdown title={nickname} id="nav-dropdown">
        <NavDropdown.Item
          as={Link}
          to="/profile"
          eventKey="4.1"
        >
          Profile
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Share a level</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Notifications</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

NavbarActions.propTypes = {
  nickname: PropTypes.string,
};
