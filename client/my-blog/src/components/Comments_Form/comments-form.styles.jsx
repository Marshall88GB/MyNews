import styled,{css} from "styled-components";

const FlexCss = css`
display: flex;
flex-direction: column;
align-items: center;

`

export const CommentFormWrapper = styled.div`
${FlexCss};
  margin-top: 20px;
  padding-top: 5px;
  border-radius: 5px;
  background-color:var(--secondaryColor)
`;

export const CommentFormContainer = styled.form`
  width: 100%;
  ${FlexCss};
`;

export const CommentFormText = styled.p`
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: 5px;
  color: var(--textColor);
  text-shadow:var(--textShadow)
`;

export const CommentFormInput = styled.input`
  height: 35px;
  width: 80%;
`;

export const CommentFormMessage = styled.p`
  margin-bottom: 10px;
  color: var(--alert);
  font-size: 1.1rem;
`;
