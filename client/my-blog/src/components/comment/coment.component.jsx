import React, { useContext } from "react";
import axios from "axios";

import { UserContext } from "../../providers/user/user.provider";


import {
  CommentWrapper,
  CommetInfo,
  CommentInfoDesc,
  CommentDelete,
  
} from "./comment.styles";
const Comment = ({
  commentText,
  commentID,
  newsHeading,
  newsID,
  user,
  userId,
  date,
  section,
}) => {
  const { UserName, UserToken, AdminName, AdminToken, AdminId } = useContext(
    UserContext
  );

  const deleteComment = (e) => {
    e.preventDefault();

    axios
      .post("//localhost/zadatak_blog/server/comments/php/deleteComment.php", {
        commentId: commentID,
        newsID: newsID,
        user: user,
        token: UserToken,
        userID: userId,
        newsHeading: newsHeading,
        section: section,
        AdminName: AdminName,
        AdminToken: AdminToken,
        AdminId: AdminId,
      })
      .then((response) => {
        if (response.data.delete) {
          e.target.parentElement.parentElement.hidden = true;
          alert("The comment has been deleted");
        } else {
          return;
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <CommentWrapper className=" border-gradient border-gradient-purple">
      <div>
        <CommentInfoDesc> {user}: </CommentInfoDesc> {commentText}
      </div>
      <CommetInfo>
        <CommentInfoDesc as="p">{date}</CommentInfoDesc>

        {UserName === user || AdminName ? (
          <CommentDelete
            onClick={(e) => {
              if (
                window.confirm("Are you sure you want to delete this comment?")
              ) {
                deleteComment(e);
              }
            }}
          >
            Delete
          </CommentDelete>
        ) : (
          ""
        )}
      </CommetInfo>
    </CommentWrapper>
  );
};

export default Comment;
