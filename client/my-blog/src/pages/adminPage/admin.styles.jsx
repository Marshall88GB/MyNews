import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondaryColor);
  margin: 20px 0;
  @media screen and (max-width: 960px) {
    width: 95%;
}
`;
