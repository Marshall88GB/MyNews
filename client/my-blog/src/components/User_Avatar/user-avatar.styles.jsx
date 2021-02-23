import styled from "styled-components";

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30%;
`;

export const AvatarUsername = styled.p`
  margin: 0 20px;
  font-size: 1.4rem;
  color: var(--colorOrang);
  @media screen and (max-width: 660px) {
    font-size: 1rem;
  }
  
`;

export const Arrow = styled.div`
  border-left: 6px solid var(--colorPurp);
  border-bottom: 6px solid var(--colorOrang);
  width: 20px;
  height: 20px;
  transform: rotate(312deg);
  margin-bottom: 10px;
  cursor: pointer;
`;
