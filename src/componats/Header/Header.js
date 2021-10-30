import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";

import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div className="header">
      <Link to="/home">Home</Link>
      <Link to="/shipping">Shipping</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <span>{user.displayName}</span>
      {user?.displayName && <button onClick={logout}> Log out </button>}
    </div>
  );
};

export default Header;
