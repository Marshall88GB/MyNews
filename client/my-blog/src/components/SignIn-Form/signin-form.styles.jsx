import styled,{css} from "styled-components";

const FlexCss= css`

display: flex;
justify-content: center;
align-items: center;

`

export const SignInWrapper = styled.div`
  letter-spacing: 1px;
  text-align: center;
  color: var(--textColor);
  font-size: 1.5rem;
  min-height: 60vh;
  width: 95%;
  ${FlexCss};
`;

export const SignInText = styled.p`
  margin: 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const InputContainer = styled.div`
 ${FlexCss};
  flex-wrap: wrap;
  padding: 10px 0;
`;

export const Input = styled.input`
  width: 50%;
  height: 25px;
  border-radius: 5px;
`;

export const Label = styled.label`
  text-align: center;
  width: 40%;
  margin-right: 10px;
`;

export const Alert = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: var(--alert);
  text-shadow: var(--textShadow);
`;
