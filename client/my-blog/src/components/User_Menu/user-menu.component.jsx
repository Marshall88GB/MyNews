import React,{useContext} from 'react';

import {UserContext} from '../../providers/user/user.provider';

import {UserWrapper,UserContainer,UserMenuLi} from './user-menu.styles'



const UserMenu = () =>{
const {clearUser,clearAdmin,UserName} = useContext(UserContext);


    return(
<UserWrapper>
<UserContainer>


<UserMenuLi

onClick={()=>{

    UserName ? clearUser() : clearAdmin()
}}>
Log out
</UserMenuLi>

</UserContainer>
</UserWrapper>
    
    )};


export default UserMenu;
