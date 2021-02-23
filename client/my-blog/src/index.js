import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./global.styles";

import UserProvaider from "./providers/user/user.provider";
import NewsProvaider from "./providers/news/news.provider";

import App from "./App";


ReactDOM.render(
  <UserProvaider>
    <NewsProvaider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </NewsProvaider>
  </UserProvaider>,
  document.getElementById("root")
);


