import React, { useEffect, useContext, useState } from "react";
import axios from "axios";

import { NewsContext } from "../../providers/news/news.provider";

import Comments from "../../containers/comments/comments.containers";

import SelectedNews from "../../components/SelectNews/select-news.component";

import { NewsPreviewWrapper } from "./news-preview.styles";

const NewsPreview = (props) => {
  const section = props.match.params.section;
  const id = props.match.params.id;
  const heading = props.match.params.heading;

  const { setNewsState, NewsHeading, NewsText, NewsImg } = useContext(
    NewsContext
  );

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .post("//localhost/zadatak_blog/server/news/php/getSelectNews.php", {
        section: section,
        id: id,
      })
      .then((response) => {
        if (response.data.id) {
          setNewsState(
            response.data.id,
            response.data.heading,
            response.data.text,
            response.data.section,
            response.data.img
          );
          setErrorMessage("");
        } else {
          setErrorMessage("The requested news does not exist.");
        }
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line
  }, [id, section]);

  return (
    <NewsPreviewWrapper>
      <SelectedNews
        error={errorMessage}
        heading={NewsHeading}
        text={NewsText}
        newsImg={NewsImg}
      />

      <Comments sectionNews={section} newsId={id} newsHeading={heading} />
    </NewsPreviewWrapper>
  );
};
export default NewsPreview;
