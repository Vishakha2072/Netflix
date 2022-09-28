import React from "react";
import "./Login.css";
import {Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt=""
            className="logo"
          />
        </div>
      </div>
      <div className="container1">
        <form>
          <h2>Sign In</h2>
          <input type="email" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required/>
          
          <Link className="registerButton1" to="/main">
            Sign In
          </Link>

          <div>
          <span>
            New to Netflix? <b><Link to="/register">Sign up now.</Link></b>
          </span>
          </div>
          <div>
          <small>
            This page in protected by Googl reCAPTCHA to ensure you're not a
            bot. <b>Learn More</b>
          </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;