import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./form.css";

const Form = (props) => {
  return (
    <main className="main">
      <div className="container">
        <div className="formContent">
          <Link to="/SignIn" className="formLink active">
            Sign In
          </Link>
          <Link to="/SignUp" className="formLink underlineHover">
            Sign Up
          </Link>

          <SignIn></SignIn>

          <div className="formFooter">
            <Link to="/" className="formFooterLink underlineHover">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;
