import React from "react";
import { Container } from "react-bootstrap";
import { HomeContent } from "./HomeContent";
export const Home = (props) => {
  return (
    <Container className="mt-5">
      <HomeContent></HomeContent>
    </Container>
  );
};

Home.propTypes = {};
