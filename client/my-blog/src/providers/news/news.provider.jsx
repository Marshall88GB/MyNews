import React, { createContext, useState } from "react";

import { setNews } from "./news.utils";

export const NewsContext = createContext({
  id: "",
  heading: "",
  text: "",
  section: "",

  setNewsState: () => {},
  toogleForceUpdate: () => {},
});

const NewsProvaider = ({ children }) => {
  const [NewsId, setNewsId] = useState(undefined);
  const [NewsHeading, setNewsHeading] = useState(undefined);
  const [NewsText, setNewsText] = useState(undefined);
  const [NewsSection, setNewsSection] = useState(undefined);
  const [NewsImg, setNewsImg] = useState(undefined);

  const setNewsState = (id, heading, text, section, img) => {
    setNewsId(setNews(id));
    setNewsHeading(setNews(heading));
    setNewsText(setNews(text));
    setNewsSection(setNews(section));
    setNewsImg(setNews(img));
  };

  return (
    <NewsContext.Provider
      value={{
        setNewsState,
        NewsId,
        NewsHeading,
        NewsText,
        NewsSection,
        NewsImg,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvaider;
