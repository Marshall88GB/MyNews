import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: var(--secondaryColor);
  min-height: 70px;
  color: var(--textSmokeColor);
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  font-weight: bold;
  letter-spacing: 2px;
  @media screen and (max-width: 900px) {
   
    padding: 0 50px;
   }
   @media screen and (max-width: 660px) {
    padding: 0 10px;
   }
 
`;

export const HeaderHeading = styled.h1`
  font-size: 3rem;
  font-style: italic;
  @media screen and (max-width: 960px) {
   
    font-size: 2rem;
    }
    @media screen and (max-width: 660px) {
      font-size: 1.5rem;
    }
`;

export const HeaderOrganHeading = styled.span`
  color: var(--colorOrang);
`;
