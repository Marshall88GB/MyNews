import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
  margin: 5px 0;

  border-bottom: 5px solid var(--secondaryColor);
  min-height: 30px;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;

export const NavLInks = styled(Link)`
  color: var(--textColor);
  text-transform: uppercase;
  text-decoration: none;
  padding: 5px;
  text-shadow: var(--textShadow);
  &:hover {
    text-decoration: underline;
  }


`;
