import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Container } from "react-bootstrap";
export const Login = () => {
  const [data, setData] = useState({
    usurname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className="mt-3 ">
      <div className="background p-3">
        <Formik
          initialValues={{
            username: "",
            password: "",
            email: "",
          }}
          onSubmit={async (values) => {
            // await new Promise((r) => setTimeout(r, 500));
            // alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <label htmlFor="username">Username</label>
            <br />
            <Field id="username" name="username" placeholder="Jane" />
            <br /> <br />
            <label htmlFor="email">Email</label>
            <br />
            <Field
              id="email"
              name="email"
              placeholder="example@acme.com"
              type="email"
            />
            <br /> <br />
            <label htmlFor="password">Your Password</label>
            <br />
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </Container>
  );
};
