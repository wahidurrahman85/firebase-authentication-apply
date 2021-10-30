import React from "react";
import useAuth from "../Hook/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>This is Home </h1>
      <h3> User: {user.displayName} </h3>
    </div>
  );
};

export default Home;
