import React from "react";

import { LogInBtnWrapper, LogInLink } from "./login-btn.styles";

const LinkBtn = ({ to, heading, ...otherProps }) => {
  return (
    <LogInBtnWrapper>
      <LogInLink to={to} {...otherProps}>
        {heading}{" "}
      </LogInLink>
    </LogInBtnWrapper>
  );
};

export default LinkBtn;
