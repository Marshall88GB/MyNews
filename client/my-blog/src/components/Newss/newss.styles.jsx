import styled,{css} from "styled-components";

const FlexCss = css`

display: flex;
flex-wrap: wrap;
text-align: center;
`
const WH100=css`

width: 100%;
    height: 100%;
`
const OvHidden = css`
overflow: hidden;

`

export const NewsWrapper = styled.div`
  padding: 20px;
  background-color: var(--secondaryColor);
  margin: 20px auto;
  color: var(--textColor);
  width: 80%;
  min-height: 350px;
 ${FlexCss};
  justify-content: space-between;
  
  ${OvHidden};
  @media screen and (max-width: 1260px) {
   
  flex-direction:column-reverse;
  padding: 20px 5px;
  }
  @media screen and (max-width: 900px) {
    width: 95%;
    padding: 0;
  }
  
`;

export const NewsContainer = styled.div`
  width: 50%;
  ${FlexCss};
  justify-content: center;
  
  @media screen and (max-width: 1260px) {
   
   width:95%;
 
   }
`;

export const NewsText = styled.p`
  color: var(--lighterGray);
  margin: 20px auto;
  width: 100%;
  
  text-shadow:var(--textShadow)
`;
export const NewsHeading = styled.h2`
  font-size:1.5rem;
  text-shadow:var(--textShadow);
  letter-spacing:2px;
  @media screen and (max-width: 1260px) {
    font-size:2rem;
   
   }
`;

export const NewsImgWrapper = styled.div`
  width: 450px;
  height: 350px;
  ${OvHidden};
  margin-left: 5px;
  @media screen and (max-width: 1260px) {
   
   margin-bottom:10px;
   margin-left: 0;
   }
   @media screen and (max-width: 660px) {
  ${WH100};
   }
 
`;
export const NewsImg = styled.img`
${WH100};
  object-fit: fill;
  object-position: center;
  
`;
