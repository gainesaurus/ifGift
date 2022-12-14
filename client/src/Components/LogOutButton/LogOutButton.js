import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LogOutButton.css'

const LogOutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logout-btn" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogOutButton;