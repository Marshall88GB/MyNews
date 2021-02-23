import styled,{css} from 'styled-components';

const FlexCss = css`

display: flex;
flex-wrap:wrap;
`

export const ContactFormWrapper = styled.div`

letter-spacing: 1px;
  text-align: center;
  color: var(--textColor);
  font-size: 1.5rem;
  min-height: 60vh;
  width: 95%;
  ${FlexCss};
  justify-content: center;
  align-items: center;
  

`

export const ContactFormContainer = styled.form`

${FlexCss};
  flex-direction: column;
 
  width:100%;

`


export const ContactFormHeading = styled.h2`


width:100%;`

export const Alert = styled.p`
  margin-bottom: 10px;
 
font-size:1.5rem;
color: var(--success);

`