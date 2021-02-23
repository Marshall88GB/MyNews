import React, { useContext, useState } from "react";

import { UserContext } from "../../providers/user/user.provider";

import UserMenu from "../User_Menu/user-menu.component";

import { AvatarWrapper, AvatarUsername, Arrow } from "./user-avatar.styles";

const UserAvatar = () => {
  const { UserName, AdminName } = useContext(UserContext);
  const [hidden, setHidden] = useState(false);
  const handleToggle = () => {
    setHidden(!hidden);
  };

  return (
    <AvatarWrapper>
      <AvatarUsername>
        {UserName ? `Hi : ${UserName}` : `Admin : ${AdminName}`}
      </AvatarUsername>

      <Arrow onClick={handleToggle}> </Arrow>
      {hidden ? <UserMenu /> : <div></div>}
    </AvatarWrapper>
  );
};

export default UserAvatar;
