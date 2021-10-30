import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  //const  {children, ...rest} = props
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
