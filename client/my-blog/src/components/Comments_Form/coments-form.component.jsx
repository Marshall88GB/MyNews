import React, { useContext, useState } from "react";
import axios from "axios";

import { UserContext } from "../../providers/user/user.provider";
import { NewsContext } from "../../providers/news/news.provider";

import {
  CommentFormWrapper,
  CommentFormContainer,
  CommentFormText,
  CommentFormInput,
  CommentFormMessage,
} from "./comments-form.styles";

import Btn from "../Btn/btn.component";

const CommentsForm = ({data}) => {
  const { UserName, UserId, UserToken ,AdminName,AdminId,AdminToken} = useContext(UserContext);
  const { NewsSection, NewsId, NewsHeading } = useContext(NewsContext);
  const [initialComment, setComment] = useState("");
  const [status, setStatus] = useState("");

  const SendCommentToData = () => {

    let data;

    if(UserName){
       data  = {

        user: UserName,
        userId: UserId,
        userToken: UserToken,
  
      }
    }else if(AdminName){
      data  = {

        user: AdminName,
        userId: AdminId,
        userToken: AdminToken,
      }

    }

    axios
      .post("//localhost/zadatak_blog/server/comments/php/sendComment.php", {
        
        user: data.user,
        userId: data.userId,
        userToken: data.userToken,
  
        comment: initialComment,
        newsSection: NewsSection,
        newsId: NewsId,
        newsHeading: NewsHeading,
      })
      .then((response) => {
        console.log(response)
        if (response.data.status) {
          setStatus("Your message has been sent, please refresh the page");
          setComment("");
          document.getElementById("myFormComments").reset();
          
        } else {
          setStatus("There was an error sending the comment");
        }
      })
      .catch((error) => console.error(error));
  };

  const SendComment = (e) => {
    e.preventDefault();
    UserName || AdminName
      ? SendCommentToData()
      : alert("You must be logged in to post a comment");
  };

  return (
    <CommentFormWrapper className="border-gradient border-gradient-purple">
      {UserName ? (
        <CommentFormText>You can comment here {UserName}</CommentFormText>
      ) : (
        <CommentFormText> Log in and leave a comment here</CommentFormText>
      )}
      <CommentFormContainer id='myFormComments' onSubmit={SendComment}>
        <CommentFormInput
        maxLength='500'
          type="text"
          name="comment"
          placeholder="Enter your comment"
          required
          
          onChange={(e) => {
            setComment(e.target.value);

          }}
        />

        <Btn type="submit" heading="Send"  />
      </CommentFormContainer>

      <CommentFormMessage>{status}</CommentFormMessage>
    </CommentFormWrapper>
  );
};

export default CommentsForm;
