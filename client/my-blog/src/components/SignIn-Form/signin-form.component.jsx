import React, { useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../../providers/user/user.provider";

import SuccessLogin from "../Success_Login/success-login.component";

import Btn from "../Btn/btn.component";

import {
  SignInWrapper,
  SignInText,
  InputContainer,
  Input,
  Label,
  Alert,
} from "./signin-form.styles";
const SignInForm = () => {
  const { UserName } = useContext(UserContext);

  const [initUserName, setUserName] = useState("");
  const [initUserEmail, setUserEmail] = useState("");
  const [initUserPassword, setUserPassword] = useState("");
  const [initUserConfirmPassword, setUserConfirmInitPassword] = useState("");
  const [initErrorMessage, setErrorMessage] = useState("");

  const SendSignIn = (e) => {
    e.preventDefault();

    if (initUserName.length < 4) {
      setErrorMessage(
        "Incorrect entry. Username must contain at least 4 characters."
      );
    } else if (!initUserEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setErrorMessage("Incorrect entry. Check your email.");
    } else if (initUserPassword.length < 8) {
      setErrorMessage(
        "Incorrect entry. Password must contain at least 8 characters."
      );
    } else if (initUserConfirmPassword.length < 1) {
      setErrorMessage("Please re-enter your password");
    } else if (initUserPassword.length !== initUserConfirmPassword.length) {
      setErrorMessage("Incorrect entry.The passwords are not the same length.");
    } else if (initUserPassword !== initUserConfirmPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      axios
        .post("//localhost/zadatak_blog/server/logInAndSignIn/php/signin.php", {
          isset: true,
          username: initUserName,
          password: initUserPassword,
          email: initUserEmail,
        })
        .then((response) => {
          console.log(response)
          if (response.data.error) {
            setErrorMessage(response.data.error);
          } else {
            setErrorMessage("Sign success");
            alert("You can now log in");
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <SignInWrapper>
      {UserName ? (
        <SuccessLogin />
      ) : (
        <div>
          <SignInText>Sign in:</SignInText>
          <form onSubmit={SendSignIn}>
            <InputContainer>
              <Label htmlFor="signin-username"> Username:</Label>
              <Input
              maxLength='100'
                type="text"
                name="signin-username"
                onChange={(e) => setUserName(e.target.value.trim())}
                placeholder="Please enter your username"
                autoComplete="off"
                required
                minLength="4"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="signin-email"> Email:</Label>
              <Input
                type="email"
                name="signin-email"
                onChange={(e) => setUserEmail(e.target.value.trim())}
                placeholder="Please enter your email"
                autoComplete="off"
                required
                maxLength='100'
              />
            </InputContainer>

            <InputContainer>
              <Label htmlFor="signin-password"> Password:</Label>
              <Input
                type="password"
                name="signin-password"
                onChange={(e) => setUserPassword(e.target.value.trim())}
                placeholder="Please enter your password"
                autoComplete="off"
                required
                minLength="8"
                maxLength='100'
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="signin-confirm_password">
                {" "}
                Confirm password:
              </Label>
              <Input
              maxLength='100'
                type="password"
                name="signin-confirm_password"
                onChange={(e) =>
                  setUserConfirmInitPassword(e.target.value.trim())
                }
                placeholder="Please confirm your password"
                autoComplete="off"
                required
                minLength="8"
              />
            </InputContainer>

            <Alert>{initErrorMessage}</Alert>
            <Btn type="submit" heading="Submit"  />
          </form>
        </div>
      )}
    </SignInWrapper>
  );
};

export default SignInForm;
