import React, { useRef, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://wallpapercave.com/wp/wp5063339.png"
            alt=""
            className="logo"
          />
          <Link to="/">
            Sign In
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email adress" required ref={emailRef} />
            <Link className="registerButton" onClick={handleStart} to="">
              Get Started 
            </Link>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="Password" required ref={passwordRef} />
            <Link to="/main" className="registerButton" onClick={handleFinish}>
              Start
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;