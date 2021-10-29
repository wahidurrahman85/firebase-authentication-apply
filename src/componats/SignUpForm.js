import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import SignInForm from "./SignInForm";
const signInRegistration = (e) => {
  e.preventDefault();
  console.log("dlkfslkdjlkj");
};

const handleEmailField = (e) => {
  console.log(e.target.value);
};

const SignUpForm = () => {
  return (
    <>
      <SignInForm />
      <Container className="sign-up-form">
        <Form className="text-start w-100" onClick={signInRegistration}>
          <h3 className="text-danger text-center py-3"> Sign Up Form </h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onClick={handleEmailField}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignUpForm;
