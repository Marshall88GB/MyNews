import React from "react";

import {
  SelectNewsWrapper,
  SelectNewsHeading,
  TextContainer,
  Text,
  Error,
  Img,
} from "./select-news.styles";

const SelectedNews = ({ heading, text, error, newsImg }) => (
  <SelectNewsWrapper className=" border-gradient border-gradient-purple">
    <Error>{error}</Error>
    <SelectNewsHeading>{heading}</SelectNewsHeading>

    <TextContainer>
      {newsImg ? (
        <Img
          src={`//localhost/zadatak_blog/server/uploads/news/${newsImg}`}
          alt={newsImg}
        />
      ) : (
        ""
      )}
      <Text>{text}</Text>
    </TextContainer>
  </SelectNewsWrapper>
);

export default SelectedNews;
