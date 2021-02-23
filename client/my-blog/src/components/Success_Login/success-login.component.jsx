import React, { useContext } from "react";
import { UserContext } from "../../providers/user/user.provider";

import { Login, User } from "./succes-login.styles";

const SuccessLogin = () => {
  const { UserName } = useContext(UserContext);

  return (
    <Login>
      You have successfully logged in as:
      <User>{UserName}</User>
    </Login>
  );
};

export default SuccessLogin;
