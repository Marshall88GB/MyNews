import React from "react";

import {
  HomeWrapper,
  HomeTextContainer,
  HomeHeading,
  HomeBoldText,
  HomeLightText,
  HomeImg,
} from "./home.styles";



import LinkBtn from "../LoginBtn/login-btn.component";

const HomeComponent = ({ heading, text1, text2, to, img }) => {
  return (
    <HomeWrapper className=" border-gradient border-gradient-purple">
      <HomeTextContainer>
        <HomeHeading>{heading}</HomeHeading>
        <HomeBoldText>{text1}</HomeBoldText>

        <HomeLightText>{text2}</HomeLightText>

        <LinkBtn heading="Read now" to={to} />
      </HomeTextContainer>

      <HomeImg
        img="slika.jpg"
        style={{ backgroundImage: `url(assets/${img})` }}
        className="border-gradient border-gradient-purple"
      ></HomeImg>
    </HomeWrapper>
  );
};
export default HomeComponent;
