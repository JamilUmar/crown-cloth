import React from "react";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";

import "./SigninSignup.css";

const SigninSignup = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninSignup;
