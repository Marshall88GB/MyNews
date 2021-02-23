import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`



:root {
    --primaryColor:#30363d;
    --secondaryColor:#3c444c;
    --lightGray: rgb(139, 138, 138);
    --lighterGray:rgb(150, 150, 150);
--textColor:white;
--textSmokeColor:whitesmoke;
    --colorPurp:rgba(133,88,214,1);
    --colorOrang:rgba(241,122,85,1);
    --alert:#ff00ca;
    --success:#9ff39f;
    --textShadow:1px 1px 5px black;
    --boxShadow:1px 1px 5px black;

  }
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}
body{
    background-color: var(--primaryColor);
   
    font-family: 'Roboto Slab', sans-serif;
}

.border-gradient {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 3px;
 
  }
  .border-gradient-purple {
      
    border-image-source: linear-gradient(to left, var(--colorPurp), var(--colorOrang));
  }


`;
