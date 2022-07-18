import { CardContent } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
export const HomeContent = () => {
  const features = ["Share", "Download", "Modify"];
  return (
    <Card className="background">
      <CardContent>
        <h1 className="text-center" variant="h5" component="div">
          WEditor official website
        </h1>
        <br />
        <p className="text-center" variant="body2">
          The place where you can...
        </p>
        <br />
        <Container>
          <Row>
            {features.map((item) => {
              return (
                <Col xs={6} md={4}>
                  <Card>
                    <CardContent className="text-center">
                      <p>{item}</p>
                    </CardContent>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <br />
        </Container>
      </CardContent>
      <CardContent>
        <p variant="body2">
          New user?
          <br />
          Try sign up
        </p>
      </CardContent>
    </Card>
  );
};