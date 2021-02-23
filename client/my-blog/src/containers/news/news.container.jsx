import React, { useEffect, useState } from "react";
import axios from "axios";

import NewsComponent from "../../components/Newss/newss.component";

var r = [];

const News = ({ section }) => {
  const [n, nn] = useState(false);

  const CrateNews = (news) => {
    const objectArray = Object.entries(news);
    objectArray.forEach(([key, value]) => {
      r.push(value);
    });
  };

  useEffect(() => {
    r = [];
    axios
      .post("//localhost/zadatak_blog/server/news/php/getNews.php", {
        section: section,
      })
      .then((response) => {
        CrateNews(response.data);
       r.reverse()      })
      .catch((error) => console.error(error))
      .finally(() => {
        nn(true);
      });
  
  }, [section]);

  return (
    <div>
      {n
        ? r.map((item, index) => {
            return (
              <NewsComponent
                key={index}
                text={item.text}
                heading={item.heading}
                id={item.id}
                section={item.section}
                img={item.img}
              />
            );
          })
        : ""}
    </div>
  );
};

export default News;
