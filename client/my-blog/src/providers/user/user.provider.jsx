import React, { createContext, useState } from "react";

import {
  getUser,
  saveUser,
  logOutUser,
  getAdmin,
  saveAdmin,
  logOutAdmin,
} from "./user.utils";

export const UserContext = createContext({
  id: "",
  UserName: "",
  email: "",
  token: "",

  sendUser: () => {},
  clearUser: () => {},
  sendAdmin: () => {},
});

const UserProvaider = ({ children }) => {
  const [UserId, setUserId] = useState(undefined);
  const [UserName, setUserName] = useState(undefined);
  const [UserEmail, setUserEmail] = useState(undefined);
  const [UserToken, setUserToken] = useState(undefined);

  const [AdminId, setAdminId] = useState(undefined);
  const [AdminName, setAdminName] = useState(undefined);
  const [AdminEmail, setAdminEmail] = useState(undefined);
  const [AdminToken, setAdminToken] = useState(undefined);

  const sendUser = ({ user, email, id, token }) => {
    setUserName(getUser(user));
    setUserId(getUser(id));
    setUserEmail(getUser(email));
    setUserToken(getUser(token));
    if (user) {
      saveUser(id, user, email, token);
    } else {
      return;
    }
  };
  const clearUser = () => {
    setUserId(undefined);
    setUserName(undefined);
    setUserEmail(undefined);
    setUserToken(undefined);
    logOutUser();
  };

  const sendAdmin = ({ admin, email, id, token }) => {
    setAdminName(getAdmin(admin));
    setAdminId(getAdmin(id));
    setAdminEmail(getAdmin(email));
    setAdminEmail(setAdminToken(token));

    if (admin) {
      saveAdmin(id, admin, email, token);
    } else {
      return;
    }
  };
  const clearAdmin = () => {
    setAdminName(undefined);
    setAdminId(undefined);
    setAdminEmail(undefined);

    logOutAdmin();
  };

  return (
    <UserContext.Provider
      value={{
        UserName,
        UserId,
        UserEmail,
        UserToken,
        sendUser,
        clearUser,
        sendAdmin,
        AdminId,
        AdminName,
        AdminEmail,
        clearAdmin,
        AdminToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvaider;
