import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogInBtnWrapper = styled.div`
  text-transform: uppercase;
  text-shadow: var(--textShadow);
  background: linear-gradient(
    11deg,
    var(--colorOrang) 0%,
    var(--colorPurp) 100%
  );
  padding: 8px 50px;
  border-radius: 25px;
  z-index: 2;
  font-size: 1.1rem;
  text-align: center;
  width: 250px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
    11deg,
    var(--colorPurp) 0%,
    var(--colorOrang) 100%
  )
    
  }
  @media screen and (max-width: 900px) {
   
    width: 200px;
    margin:20px 0;
    
  }
  @media screen and (max-width: 660px) {
    width: 150px;
    font-size: 1rem;
    padding: 8px 10px;
  }
`;

export const LogInLink = styled(Link)`
  color: var(--textColor);
  text-decoration: none;
`;
