import React, { useState } from "react";
import axios from "axios";
import Btn from "../../components/Btn/btn.component";

import {
  AddNewsWrapper,
  AddNewsForm,
  AddNewsLabel,
  InputNews,
  Alert,
} from "./add-news.styles";

const AddNews = () => {
  const [initHedingNews, setHedingNews] = useState("");
  const [initTextNews, setTextNews] = useState("");
  const [initSectionNews, setSectionNews] = useState("my_thoughts");
  const [initErrorMessage, setErrorMessage] = useState("");
  const imgMaxSize = 2097152;

  const SubmitFormNews = (e) => {
    e.preventDefault();
    let data = new FormData();
    const img = document.getElementById("file");


    
    if(img.files[0].size > imgMaxSize ){
     return setErrorMessage("Please reduce the image to a smaller size. The image must not be larger than 2mb");
   
    
    }
    if (img.files[0]) {
      data.append("img", img.files[0]);
      
      }
    

    data.append("heading", initHedingNews);
    data.append("text", initTextNews);
    data.append("section", initSectionNews);
    axios
      .post("//localhost/zadatak_blog/server/news/php/addNews.php", data, {
        header: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        
        if (response.data.upload) {
          document.getElementById("formAddNews").reset();
          setErrorMessage("Success  add");
          setHedingNews("");
          setTextNews("");
          setSectionNews("my_thoughts")
        }else if(response.data.error){
          setErrorMessage(response.data.error);
        } else {
          setErrorMessage("There was an error adding the news.");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <AddNewsWrapper>
      <AddNewsForm id='formAddNews' onSubmit={SubmitFormNews}>
        <AddNewsLabel htmlFor="sectionNews">Select where to add:</AddNewsLabel>

        <select
          name="sectionNews"
          defaultValue="my_thoughts"
          onChange={(e) => setSectionNews(e.target.value.trim())}
        >
          <option value="it_news">IT News</option>
          <option value="my_thoughts">MY THOUGHTS</option>
          <option value="big_changes">BIG CHANGES</option>
        </select>

        <AddNewsLabel htmlFor="heading_title">Enter a title</AddNewsLabel>
        <InputNews
          name="heading_title"
          type="text"
          placeholder="Please enter your Title"
          autoComplete="off"
          required
          minLength="1"
          maxLength='100'
          onChange={(e) => setHedingNews(e.target.value.trim())}
        />
        <AddNewsLabel htmlFor="news_text"> Enter text</AddNewsLabel>

        <textarea
          name="news_text"
          rows="50"
          minLength="1"
          maxLength='5000'
          onChange={(e) => setTextNews(e.target.value.trim())}
        ></textarea>
        <AddNewsLabel htmlFor="file">Upload Image </AddNewsLabel>
        <InputNews type="file" id="file" name="file" />
        <Btn type="submit" heading="Publish"  />
      </AddNewsForm>
      <Alert>{initErrorMessage}</Alert>
      
    </AddNewsWrapper>
  );
};

export default AddNews;
