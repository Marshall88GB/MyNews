import React, { useContext } from "react";
import axios from "axios";
import LinkBtn from "../LoginBtn/login-btn.component";

import { UserContext } from "../../providers/user/user.provider";
import Btn from "../Btn/btn.component";

import {
  NewsWrapper,
  NewsContainer,
  NewsText,
  NewsImgWrapper,
  NewsImg,
  NewsHeading
} from "./newss.styles";

const NewsComponent = ({ id, text, heading, section, img }) => {
  const link = `/${section}/${heading}/${id}`;

  const { AdminName, AdminId, AdminToken } = useContext(UserContext);
  const deleteNews = (e) => {
    axios
      .post("//localhost/zadatak_blog/server/news/php/deleteNews.php", {
        AdminName: AdminName,
        newsID: id,
        newsHeading: heading,
        section: section,
        AdminToken: AdminToken,
        AdminId: AdminId,
      })
      .then((response) => {
        if (response.data.delete) {
          e.target.parentElement.parentElement.parentElement.parentElement.parentElement.hidden = true;
     
        } else {
          return;
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
    <NewsWrapper className="border-gradient border-gradient-purple">
      <NewsContainer>
        <NewsHeading>{heading}</NewsHeading>

        <NewsText>
          {text.length > 600 ? text.substring(0, 600) : text} ...{" "}
        </NewsText>

        <div>
          <LinkBtn heading="Read more" to={link} />
          {AdminName ? (
            <Btn
              heading="Delete"
              onClick={(e) => {
                if (
                  window.confirm("Are you sure you want to delete this news?")
                ) {
                  deleteNews(e);
                }
              }}
            />
          ) : (
            ""
          )}
        </div>
      </NewsContainer>

      {img ? (
        <NewsImgWrapper className=" border-gradient border-gradient-purple">
          <NewsImg
            src={`//localhost/zadatak_blog/server/uploads/news/${img}`}
            alt={img}
          />
        </NewsImgWrapper>
      ) : (
        ""
      )}
    </NewsWrapper>
    </div>
  );
};

export default NewsComponent;
