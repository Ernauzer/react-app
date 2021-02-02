import React from "react";

const SignIn = (props) => {
  return (
    <form className="form">
      <input
        type="email"
        id="email"
        className="input"
        name="email"
        placeholder="email"
        required
      />
      <input
        type="password"
        id="password"
        className="input"
        name="password"
        placeholder="password"
        required
      />
      <button type="submit" className="formBtn" value="Log In">
        Log In
      </button>
    </form>
  );
};

export default SignIn;
