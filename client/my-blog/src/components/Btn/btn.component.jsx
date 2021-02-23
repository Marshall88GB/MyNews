import React from "react";

import { BtnWrapper, BtnContainer } from "./btn.styles";

const Btn = ({ type, heading, ...otherProps }) => {
  return (
    <BtnWrapper>
      <BtnContainer type={type} {...otherProps}>
        {heading}
      </BtnContainer>
    </BtnWrapper>
  );
};

export default Btn;
