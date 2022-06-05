import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Navbar.css";

const LoginButton = () => {
  
  const { loginWithRedirect, isAuthenticated} =
    useAuth0();

  return (
    !isAuthenticated && (
      <button className="loginButton" onClick={() => loginWithRedirect()}>Log In</button>
    )
  );
};

export default LoginButton;
