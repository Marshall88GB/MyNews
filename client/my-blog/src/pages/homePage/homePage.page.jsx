import React from "react";

import HomeComponent from "../../components/Home_Component/home.component";

import { HomePageWrapper } from "./homePage.styles";

const HomePage = () => {
  const text1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate imperdiet ornare. Vivamus faucibus dictum ultricies. Sed fermentum, augue sed maximus tempus, nunc orci facilisis lacus, non fermentum nunc velit et eros.";

  const text2 =
    "  Praesent lobortis orci a commodo placerat. Maecenas nec libero urna. Aliquam sed malesuada enim. Donec vitae tristique ipsum. In suscipit egestas mauris, sit amet rutrum erat sodales eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec augue felis, tempor sit amet tellus et, maximus sodales orci. Donec quis eros at ante varius fringilla. Nam faucibus eros in dignissim aliquam.";

  return (
    <HomePageWrapper>
      <HomeComponent
        heading="
What can you read in IT News?"
        text1={text1}
        text2={text2}
        to="/it_news"
        img="it_news.jpg"
      />
      <HomeComponent
        heading="
What can you read in My Thoughts?"
        text1={text1}
        text2={text2}
        to="/my_thoughts"
        img="my_thoughts.jpg"
      />
      <HomeComponent
        heading="
What can you read in Big Changes?"
        text1={text1}
        text2={text2}
        to="/big_changes"
        img="big_changes.jpg"
      />
    </HomePageWrapper>
  );
};

export default HomePage;
