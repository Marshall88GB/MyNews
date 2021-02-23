import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin-top: 50px;
  width: 80%;
  min-height: 70vh;
  background-color: var(--secondaryColor);
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 900px) {
 flex-direction:column-reverse;
 width: 95%;
 }
`;

export const HomeTextContainer = styled.div`
  color: var(--textColor);
  width: 50%;
  min-height: 50vh;
  @media screen and (max-width: 900px) {
   
    width: 95%;
  }
  
`;

export const HomeHeading = styled.h2`
  text-align: center;
  margin: 20px 0;
  font-size: 2rem;
  letter-spacing: 2px;
`;

export const HomeBoldText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const HomeLightText = styled.p`
  font-weight: lighter;
  font-size: 0.9rem;
  margin: 20px 0;
`;

export const HomeImg = styled.div`
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40%;
  height: 60vh;
  @media screen and (max-width: 900px) {
   
    width: 100%;
 }
 
`;
