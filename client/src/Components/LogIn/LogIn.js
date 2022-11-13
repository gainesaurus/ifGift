import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import './LogIn.css';

import { useNavigate } from "react-router";

const LogIn = () => {
  const navigate = useNavigate();
  const { loginWithPopup, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>From:</h2>
        <h2>To: You!</h2>
        <p>Don't know what to get that special someone?</p>
        <ul>
          <li>Check their ifGift want list!</li>
          <li>Or keep your own lists of gifting ideas for all the special folks in your life.</li>
        </ul>
        <p>Dive in to a better way of giving with ifGift.</p>
        <button
          onClick={loginWithPopup}
          type="button"
          className="login-btn"
        >
          Sign up
        </button>
      </div>
    </div>
  )
};

export default LogIn;