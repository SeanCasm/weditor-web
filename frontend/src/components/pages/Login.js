import React from "react";
import { useForm } from "react-hook-form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export const Login = () => {
  const { startLogin, errorMessage } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (userData, e) => {
    e.preventDefault();
    startLogin(userData);
  };

  return (
    <Container className="background p-2 mt-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Col} md="3" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email")}
            type="email"
            placeholder="youremail@something.com"
          />
          <span className="text-danger d-block mb-3">
            {errors?.email?.message}
          </span>

          <Form.Label>Password</Form.Label>
          <Form.Control {...register("password")} type="password" />
          <span className="text-danger d-block mb-3">
            {errors?.password?.message}
          </span>
        </Form.Group>
        <span className="text-danger d-block mb-3">{errorMessage}</span>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
const SignupSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must have at leats 8 characters"),
});
const defaultValues = {
  email: "",
  password: "",
};
