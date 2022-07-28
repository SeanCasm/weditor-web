import React from "react";
import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router";

export const Profile = () => {
  const navigate = useNavigate();

  const onLevelPressed = (link) => {
    navigate(link, { replace: false });
  };

  return (
    <>
      <div className="d-lg-flex justify-content-evenly">
        <Button
          variant="primary"
          onClick={() => {
            onLevelPressed("myLevels");
          }}
        >
          My levels
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onLevelPressed("account");
          }}
        >
          Account
        </Button>
      </div>
      <Outlet />
    </>
  );
};
