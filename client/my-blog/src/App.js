import React, { useContext, useEffect, lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";

import { UserContext } from "./providers/user/user.provider";

import Header from "./containers/header/header.container";
import Navigation from "./containers/nav/nav.component";



const HomePage = lazy(() => import("./pages/homePage/homePage.page"));

const AdminPage = lazy(() => import("./pages/adminPage/admin.page"));

const AddNews = lazy(() => import("./pages/AdminAddNews/add-news.page"));
const Contact = lazy(() => import("./pages/ContactMe/contact-me.page"));
const MyThoughts = lazy(() =>
  import("./pages/MY_THOUGHTS/my_thoughts.component")
);
const ItNews = lazy(() => import("./pages/IT_NEWS/it-news.page"));
const BigChanges = lazy(() => import("./pages/BIG_CHANGES/big-changes.page"));

const NewsPreview = lazy(() =>
  import("./pages/News_Preview/news-preview.page")
);

const LogAndSignInPage = lazy(() =>
  import("./pages/LogAndSignInPage/log-and-sign-in.component")
);

const App = () => {
  const { sendUser, sendAdmin } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("MarshallBlogUserInfo")) {
      var retrievedUser = localStorage.getItem("MarshallBlogUserInfo");
      var user = JSON.parse(retrievedUser);

      if (user.data.id) {
        sendUser(user.data);
      }
    } else {
      if (localStorage.getItem("MarshallBlogAdminInfo")) {
        var retrievedAdmin = localStorage.getItem("MarshallBlogAdminInfo");
        var admin = JSON.parse(retrievedAdmin);
        if (admin.data.admin) {
          sendAdmin(admin.data);
        } else {
          return;
        }
      } else {
        return;
      }
    }
  }, [sendUser, sendAdmin]);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Suspense fallback={'Loading...'}>

      <Switch>
       
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LogAndSignInPage} />
          <Route exact path="/signin" component={LogAndSignInPage} />
          <Route exact path="/admin-control" component={AdminPage} />
          <Route exact path="/addNews" component={AddNews} />
          <Route exact path="/my_thoughts" component={MyThoughts} />
          <Route exact path="/it_news" component={ItNews} />
          <Route exact path="/big_changes" component={BigChanges} />
          <Route exact path="/contact_me" component={Contact} />
          <Route path="/:section/:heading/:id" component={NewsPreview} />
         
       
      </Switch>
  
      </Suspense>
    </div>
  );
};

export default App;
