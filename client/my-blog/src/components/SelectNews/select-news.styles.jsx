import styled,{css} from "styled-components";

const FlexCss = css`

display: flex;
align-items: center;
flex-direction: column;`

export const SelectNewsWrapper = styled.div`
  min-height: 70vh;
  background-color: var(--secondaryColor);
${FlexCss};
  color: var(--textColor);
  padding: 20px;
 
 
`;

export const SelectNewsHeading = styled.h2`
  text-align: center;
  padding: 0 30px 10px;
  margin: 10px 0 30px 0;
  font-size: 2rem;
  letter-spacing: 10px;
  text-transform: uppercase;
  text-shadow:var( --textShadow)
`;

export const TextContainer = styled.div`
  text-align: left;
  @media screen and (max-width: 960px) {
    ${FlexCss};

   
  }
  
 
`;

export const Text = styled.span`
  font-size: 1.1rem;
  line-height: 2rem;
  width: 100%;
  text-shadow:var( --textShadow)
`;

export const Error = styled.div`
  font-size: 2.5rem;
`;

export const Img = styled.img`
  width: 450px;
  height: 350px;
  margin-bottom: 50px;
  border-radius: 5px;
  float: left;
  margin-right: 50px;
  @media screen and (max-width: 960px) {
    float: none;
    margin-right: 0;
   
  }
  @media screen and (max-width: 660px) {
    width: 100%;
  height: 100%;
   
  }
`;
