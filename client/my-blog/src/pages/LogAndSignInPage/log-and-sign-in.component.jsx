import React from "react";
import LogInForm from "../../components/LogIn-Form/login-form.component";

import SignInForm from "../../components/SignIn-Form/signin-form.component";


import { Route } from "react-router-dom";

import { LogSignWrapper } from "./log-and-sign-in.styles";

const LogAndSignInPage = () => {
  return (
    <LogSignWrapper className=" border-gradient border-gradient-purple">
      <Route exact path="/login" component={LogInForm} />
      <Route exact path="/signin" component={SignInForm} />

    </LogSignWrapper>
  );
};

export default LogAndSignInPage;
