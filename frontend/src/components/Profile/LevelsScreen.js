import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLevel } from "../../hooks/useLevel";
import { LevelCards } from "../LevelCard/LevelCard";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
export const LevelsScreen = () => {
  const { levels, startGet, status, setLevels, message } = useLevel();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues,
  });
  const navigate = useNavigate();

  const onNewPressed = () => {
    navigate("upload", { replace: false });
  };
  useEffect(() => {
    startGet(3, 0);
    return () => {
      setLevels([]);
    };
  }, []);

  const onSubmit = ({ limit, from }, e) => {
    e.preventDefault();
    startGet(limit, from);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Col} md="1" className="mb-3">
          <Form.Label>limit</Form.Label>
          <Form.Control {...register("limit")} type="number" />
          <Form.Label>from</Form.Label>
          <Form.Control {...register("from")} type="number" />
        </Form.Group>
        <Button variant="success" type="submit">
          Done
        </Button>
        <Button variant="secondary">New</Button>
      </Form>
      <br />
      <h3>{message}</h3>
      <br />
      <ul className="container">
        {status === "loaded" &&
          levels.map((lvl) => {
            return (
              <li className="row" key={lvl._id}>
                <LevelCards className="col-sm" levelData={lvl} />
              </li>
            );
          })}
      </ul>
    </>
  );
};
const defaultValues = {
  limit: 3,
  from: 0,
};
