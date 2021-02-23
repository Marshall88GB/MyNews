import React from "react";

import { LoginWrapper } from "./admin.styles";

import AdminLogIn from "../../components/Admin_Login/admin-login.component";

const AdminPage = () => {
  return (
    <LoginWrapper className=" border-gradient border-gradient-purple">
      <AdminLogIn />
    </LoginWrapper>
  );
};

export default AdminPage;
