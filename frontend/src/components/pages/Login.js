import React from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";
export const Login = () => {
  const { startLogin, errorMessage } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (userData) => {
    startLogin(userData);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Container className="background p-2 mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Email</label>
        <br />
        <input placeholder="email@gmail.com" {...register("email")} />
        <br />
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <label>Password</label>
        <br />
        <input type="password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.email && <span>This field is required</span>}
        <br />
        <br />
        <p>{errorMessage}</p>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};
