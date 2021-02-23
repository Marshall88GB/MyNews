import styled from "styled-components";


export const UserWrapper = styled.div`
min-width: 100px;
position: absolute;
right: 12%;
top: 70px;
    border: 2px solid var(--lighterGray);
 width: 12%;
 direction: rtl;
 background-color:var(--primaryColor);
 @media screen and (max-width: 660px) {
    right: 2%;
   }
`

export const UserContainer= styled.ul`

padding: 5px;
`

export const UserMenuLi = styled.li`
padding: 10px 0;

    cursor: pointer;
    min-height: 40px;
    &:hover{
        border-bottom: 1px solid gray;
    }

`