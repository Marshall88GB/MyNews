import styled,{css} from "styled-components";

const FlexCss = css`

display: flex;
justify-content: center;
align-items: center;



`

export const AdminLogInWrapper = styled.div`
  letter-spacing: 1px;
  text-align: center;
  color: var(--textColor);
  font-size: 1.5rem;
  min-height: 60vh;
  width: 95%;
  ${FlexCss}
  
`;

export const AdminLogInContainer = styled.div`
 ${FlexCss}
flex-wrap:wrap;
  padding: 10px 0;
`;


export const AdminLogInLabel = styled.label`
  text-align: end;
  min-width: 30%;
  margin-right: 10px;
`;

export const AdminLogInInput = styled.input`
  width: 60%;
  height: 25px;
  border-radius: 5px;
  @media screen and (max-width: 660px) {
    width: 100%;
   }
`;

export const AdminLogInText = styled.p`
  margin: 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
export const AdminAlert = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: var(--alert);
  text-shadow: var(--boxShadow);
`;
