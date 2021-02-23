import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../../components/comment/coment.component";
import CommentsForm from "../../components/Comments_Form/coments-form.component";


var r = [];

const Comments = ({ sectionNews, newsId, newsHeading }) => {
  const [n, nn] = useState(false);

  const CrateComment = (comment) => {
    const objectArray = Object.entries(comment);
    objectArray.forEach(([key, value]) => {
      r.push(value);
    });
  };

  useEffect(() => {
    r = [];
    axios
      .post("//localhost/zadatak_blog/server/comments/php/getComments.php", {
        selection: sectionNews,
        id: newsId,
        heading: newsHeading,
      })
      .then((response) => {
        CrateComment(response.data);
        r.reverse()
      })
      .catch((error) => console.error(error))
      .finally(() => {
        nn(true);
      });
  }, [newsHeading, newsId, sectionNews]);

  return (
    <div>
      <CommentsForm />

      {n
        ? r.map((item, index) => {
            return (
              <Comment
                key={index}
                commentText={item.comment}
                commentID={item.commentId}
                newsHeading={item.newsHeading}
                newsID={item.newsID}
                user={item.user}
                userId={item.userId}
                date={item.date}
                section={item.section}
              />
            );
          })
        : ""}
    </div>
  );
};

export default Comments;
