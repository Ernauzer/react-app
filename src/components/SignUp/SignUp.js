import React from "react";

const SignUp = (props) => {
  return (
    <form className="form">
      <input
        type="text"
        id="name"
        className="input"
        name="name"
        placeholder="name" required
      />
      <input
        type="email"
        id="email"
        className="input"
        name="email"
        placeholder="email" required
      />

      <input
        type="password"
        id="password"
        className="input"
        name="password"
        placeholder="password" required
      />
      <label className="label">
        <input type="checkbox" required />
        <span>i have read and accept the privacy policy</span>
      </label>
      <button type="submit" className="formBtn" value="Log In">
        Log Up
      </button>
    </form>
  );
};

export default SignUp;
