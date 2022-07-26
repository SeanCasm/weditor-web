import React from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { useRegister } from "../../hooks/useRegister";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const Register = () => {
  const { startRegister, errorMessage } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (userData, event) => {
    event.preventDefault();
    startRegister(userData);
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
          <Form.Label>Name</Form.Label>
          <Form.Control {...register("username")} type="text" />
          <span className="text-danger d-block mb-3">
            {errors?.username?.message}
          </span>
          <Form.Label>Nickname</Form.Label>
          <Form.Control {...register("nickname")} type="text" />
          <span className="text-danger d-block mb-3">
            {errors?.nickname?.message}
          </span>
          <Form.Label>Password</Form.Label>
          <Form.Control {...register("password")} type="password" />
          <span className="text-danger d-block mb-3">
            {errors?.password?.message}
          </span>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control {...register("password2")} type="password" />
          <span className="text-danger d-block mb-3">
            {errors?.password2?.message}
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
  username: yup
    .string("Username mustn't have numbers")
    .required("Username is required")
    .max(60, "Username cannot have more than 60 characters"),
  nickname: yup
    .string()
    .required("Nickname is required")
    .min(6, "Nickname must have at least 6 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must have at leats 8 characters"),
  password2: yup
    .string()
    .required("Password is required")
    .min(8, "Password must have 8 characters at leats")
    .oneOf([yup.ref("password"), null], "Passwords don't match!"),
  email: yup.string().required("Email is required").email("Invalid email"),
});
const defaultValues = {
  username: "",
  nickname: "",
  password: "",
  password2: "",
  email: "",
};
