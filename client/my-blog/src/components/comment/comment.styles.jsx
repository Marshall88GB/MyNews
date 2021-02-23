import styled from "styled-components";

export const CommentWrapper = styled.div`
  margin: 5px 0;
  color: white;
  background-color: var(--secondaryColor);
`;
export const CommetInfo = styled.div`
  display: flex;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`;
export const CommentInfoDesc = styled.span`
  color: var(--lightGray);
  margin: 10px 10px 0;
  text-shadow:var(--textShadow)
`;

export const CommentDelete = styled.button`
  color: var(--colorOrang);
  direction: rtl;
  background: transparent;
  cursor: pointer;
  letter-spacing: 2px;
  border: 1px solid var(--colorOrang);
  padding: 5px;
  font-weight: bold;
  border-radius: 5px;
  text-transform: uppercase;
  box-shadow: 1px 1px 4px 1px var(--colorPurp);
  &:hover {
    transform: scale(1.05);
    filter: brightness(150%);
  }
`;


