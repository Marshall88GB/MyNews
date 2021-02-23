import React, { useContext, useState } from "react";
import axios from "axios";
import Btn from "../Btn/btn.component";
import SuccessLogin from "../Success_Login/success-login.component";

import { UserContext } from "../../providers/user/user.provider";

import {
  AdminLogInWrapper,
  AdminLogInContainer,
  AdminLogInLabel,
  AdminLogInInput,
  AdminLogInText,
  AdminAlert,
} from "./admin-login.styles";

const AdminLogIn = () => {
  const { sendAdmin, AdminName } = useContext(UserContext);

  const [initAdminName, setAdminName] = useState("");
  const [initAdminPass, setAdminPass] = useState("");
  const [initErrorMessage, setErrorMessage] = useState("");

  const SendLogIn = (e) => {
    e.preventDefault();
    if (initAdminName.length < 4 || initAdminPass.length < 8) {
      setErrorMessage(
        "Incorrect entry. Username must contain at least 4 characters and password at least 8 characters"
      );
    } else {
      axios
        .post(
          "//localhost/zadatak_blog/server/logInAndSignIn/php/loginAdmin.php",
          {
            admin: true,
            username: initAdminName,
            password: initAdminPass,
          }
        )
        .then((response) => {
          if (!response.data.admin) {
            setErrorMessage(
              "There is no such user. Please check your entry. Username must contain at least 4 characters and password at least 8 characters"
            );
          } else {
            sendAdmin(response.data);
            setErrorMessage("");
            setAdminName("");
            setAdminPass("");
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <AdminLogInWrapper>
      {AdminName ? (
        <SuccessLogin />
      ) : (
        <div>
          <AdminLogInText>Admin log in:</AdminLogInText>

          <form onSubmit={SendLogIn}>
            <AdminLogInContainer >
              <AdminLogInLabel htmlFor="login-Username">
                {" "}
                Username:
              </AdminLogInLabel>
              <AdminLogInInput
                type="text"
                name="login-username"
                onChange={(e) => setAdminName(e.target.value.trim())}
                placeholder="Please enter your username"
                autoComplete="off"
                required
                minLength="4"
              />
            </AdminLogInContainer>

            <AdminLogInContainer>
              <AdminLogInLabel htmlFor="login-pass"> Password:</AdminLogInLabel>
              <AdminLogInInput
                type="password"
                name="login-pass"
                onChange={(e) => setAdminPass(e.target.value.trim())}
                placeholder="Please enter your password"
                autoComplete="off"
                minLength="8"
                required
              />
            </AdminLogInContainer>
            <AdminAlert>{initErrorMessage}</AdminAlert>
            <Btn type="submit" heading="Submit"  />
          </form>
        </div>
      )}
    </AdminLogInWrapper>
  );
};

export default AdminLogIn;
