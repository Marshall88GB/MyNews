import styled,{css} from "styled-components";
import { Link } from "react-router-dom";

const FlexCss = css`

display: flex;
flex-wrap:wrap;

`
const FlexCenter = css`

justify-content: center;
align-items: center;
`
const Margin20 =  css`

margin: 20px 0;

`

export const LogInFormWrapper = styled.div`
  letter-spacing: 1px;
  text-align: center;
  color: var(--textColor);
  font-size: 1.5rem;
  min-height: 60vh;
  width: 95%;
  ${FlexCss};
 
  ${FlexCenter};
 
`;

export const LogInText = styled.p`
  ${Margin20};
  letter-spacing: 2px;
  text-transform: uppercase;
`;
export const LogInFormContainer = styled.form`
  ${FlexCss}
  flex-direction: column;
 
  
  
`;
export const LogInInputContainer = styled.div`
 ${FlexCss};
 ${FlexCenter};
  
  padding: 10px 0;

`;

export const LogInInput = styled.input`
  width: 60%;
  height: 25px;
  border-radius: 5px;
  height:30px;
  @media screen and (max-width: 660px) {
    width: 100%;
   }
  
`;

export const LogInLabel = styled.label`
  text-align: end;
  min-width: 30%;
  margin-right: 10px;

`;

export const LogInRegister = styled.p`
  ${Margin20};
  ${FlexCss};
 ${FlexCenter};
`;
export const LogInForgot = styled.p`
 ${Margin20};
  ${FlexCss};
 ${FlexCenter};
  font-size:1rem;
  
`;
export const LogInSignInForgot = styled(Link)`
  text-transform: uppercase;
  color: rgb(103 241 85);
  margin-left: 5px;
  &:hover {
    color: var(--colorPurp);
  }
`;

export const LogInSignIn = styled(Link)`
  text-transform: uppercase;
  color: var(--colorOrang);
  margin-left: 5px;
  &:hover {
    color: var(--colorPurp);
  }
`;

export const LogInAlert = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: var(--alert);
  text-shadow: var(--textShadow);
`;
