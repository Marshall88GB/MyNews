import styled from "styled-components";

export const BtnWrapper = styled.div`
  margin: 25px 0;
`;

export const BtnContainer = styled.button`
  text-transform: uppercase;
  text-shadow: var(--boxShadow);
  background: linear-gradient(
    11deg,
    var(--colorOrang) 0%,
    var(--colorPurp) 100%
  );
  border: none;
  padding: 8px 50px;
  border-radius: 25px;
  z-index: 2;
  font-size: 1.1rem;
  text-align: center;
  color: var(--textColor);
letter-spacing:2px;
font-weight:600;
text-shadow: var(--textShadow);
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      11deg,
      var(--colorPurp) 0%,
      var(--colorOrang) 100%
    );
  }
  &:focus {
    outline: none;
  }
`;
