import React,{useContext} from 'react';

import {UserContext} from '../../providers/user/user.provider';

import LinkBtn from '../../components/LoginBtn/login-btn.component';
import UserAvatar from '../../components/User_Avatar/user-avatar.component';

import {HeaderWrapper,HeaderHeading,HeaderOrganHeading} from './header.styles'


const Header = () => {

    const {UserName,AdminName} = useContext(UserContext);
    return(
    <HeaderWrapper>
   <HeaderHeading>Marshall<HeaderOrganHeading> News</HeaderOrganHeading></HeaderHeading>

   {

    AdminName ? (
      <LinkBtn to='/addNews' heading='Add News' />
    ):''
   }



   {UserName || AdminName ? (
  <UserAvatar />
  ) :  (
    <LinkBtn to='/login' heading='Log in' />
  )}
  
    </HeaderWrapper>
)};

export default Header;