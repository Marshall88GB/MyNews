import React, { useContext, useState } from "react";
import axios from "axios";

import Btn from "../Btn/btn.component";

import { UserContext } from "../../providers/user/user.provider";

import SuccessLogin from "../Success_Login/success-login.component";

import {
  LogInFormWrapper,
  LogInText,
  LogInFormContainer,
  LogInInputContainer,
  LogInInput,
  LogInLabel,
  LogInRegister,
  LogInSignIn,
  LogInAlert,
  LogInForgot,
  LogInSignInForgot
} from "./login-form.styles";

const LogInForm = () => {
  const { sendUser, UserName } = useContext(UserContext);

  const [initUserName, setUserName] = useState("");
  const [initUserPass, setUserPass] = useState("");
  const [initErrorMessage, setErrorMessage] = useState("");

  const SendLogIn = (e) => {
    e.preventDefault();
    if (initUserName.length < 4 || initUserPass.length < 8) {
      setErrorMessage(
        "Incorrect entry. Username must contain at least 4 characters and password at least 8 characters"
      );
    } else {
      axios
        .post("//localhost/zadatak_blog/server/logInAndSignIn/php/login.php", {
          isset: true,
          username: initUserName,
          password: initUserPass,
        })
        .then((response) => {
          if (!response.data.user) {
            setErrorMessage(
              "There is no such user. Please check your entry. Username must contain at least 4 characters and password at least 8 characters"
            );
          } else {
            sendUser(response.data);
            setErrorMessage("");
            setUserName("");
            setUserPass("");
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <LogInFormWrapper>
      {UserName ? (
        <SuccessLogin />
      ) : (
        <div>
          <LogInText>Log in:</LogInText>

          <LogInFormContainer onSubmit={SendLogIn}>
            <LogInInputContainer>
              <LogInLabel htmlFor="login-Username"> Username:</LogInLabel>
              <LogInInput
              maxLength='100'
                type="text"
                name="login-username"
                onChange={(e) => setUserName(e.target.value.trim())}
                placeholder="Please enter your username"
                autoComplete="off"
                required
                minLength="4"
              />
            </LogInInputContainer>

            <LogInInputContainer>
              <LogInLabel htmlFor="login-pass"> Password:</LogInLabel>
              <LogInInput
                type="password"
                name="login-pass"
                onChange={(e) => setUserPass(e.target.value.trim())}
                placeholder="Please enter your password"
                autoComplete="off"
                minLength="8"
                maxLength='100'
                required
              />
            </LogInInputContainer>
            <LogInAlert>{initErrorMessage}</LogInAlert>
            <Btn type="submit" heading="Submit"  />
            <LogInRegister>
              Not registered? Go to
              <LogInSignIn to="/signin">Sign in</LogInSignIn>
            </LogInRegister>
            <LogInForgot>
            Forgot your password? Please
            <LogInSignInForgot to="/contact_me">Contact Me</LogInSignInForgot>
          </LogInForgot>
          </LogInFormContainer>
        </div>
      )}
    </LogInFormWrapper>
  );
};

export default LogInForm;
