export const getUser = (user) => {
  if (user) {
    return user;
  } else {
    return;
  }
};
export const saveUser = (id, username, email, token) => {
  var testObject = {
    data: { id: id, user: username, email: email, token: token },
  };
  localStorage.setItem("MarshallBlogUserInfo", JSON.stringify(testObject));
};

export const logOutUser = () => {
  localStorage.removeItem("MarshallBlogUserInfo");
};

export const getAdmin = (admin) => {
  if (admin) {
    return admin;
  } else {
    return;
  }
};

export const saveAdmin = (id, username, email, token) => {
  var testObject = {
    data: { id: id, admin: username, email: email, token: token },
  };
  localStorage.setItem("MarshallBlogAdminInfo", JSON.stringify(testObject));
};
export const logOutAdmin = () => {
  localStorage.removeItem("MarshallBlogAdminInfo");
};
