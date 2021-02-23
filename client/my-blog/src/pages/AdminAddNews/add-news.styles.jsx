import styled from "styled-components";

export const AddNewsWrapper = styled.div`
  margin: 50px auto;
  width: 80%;
  min-height: 60vh;
`;

export const AddNewsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  color: var(--textColor);
  padding: 20px;
`;

export const AddNewsLabel = styled.label`
  text-transform: uppercase;
`;

export const InputNews = styled.input`
  height: 50px;
`;
export const Alert = styled.p`
  color: var(--alert);
  font-size: 1.6rem;
  text-align: center;
`;
