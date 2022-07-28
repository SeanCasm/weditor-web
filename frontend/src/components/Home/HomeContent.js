import React from "react";
import { NavLink } from "react-router-dom";
import { LevelCards } from "../LevelCard/LevelCard";

export const HomeContent = () => {
  return (
    <div className="background p-2">
      <h1 className="text-center" variant="h5" component="div">
        WEditor official website
      </h1>
      <br />
      <br />
      <div className="text-center">
        <p variant="body2">
          New user? Try to <NavLink to="register">sign up</NavLink>
        </p>
      </div>
      
    </div>
  );
};
