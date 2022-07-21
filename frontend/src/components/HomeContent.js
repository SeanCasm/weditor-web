import React from "react";
import { Container } from "react-bootstrap";
export const HomeContent = () => {
  return (
    <Container className="background p-2">
      <h1 className="text-center" variant="h5" component="div">
        WEditor official website
      </h1>
      <br />
      <br />
      <div className="text-center">
        <p variant="body2">
          New user? Try to <a href="/">sign up</a>
        </p>
      </div>
    </Container>
  );
};
