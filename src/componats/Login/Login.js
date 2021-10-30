import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const Login = () => {
  const { signInUsingGoogle, signInUsingGighub } = useAuth();
  return (
    <div>
      <h2>Please Login</h2>
      <br />
      <button onClick={signInUsingGoogle}>google Sign In</button>
      <br />
      <button onClick={signInUsingGighub}> github Sign In </button>
      <br />
      <Link to="/register">New User?</Link>
    </div>
  );
};

export default Login;
