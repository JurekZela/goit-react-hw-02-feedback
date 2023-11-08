import { styled } from 'styled-components';

export const FeedbackCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Headrest = styled.h2`
 font-size: 30px;
`;

export const Button = styled.button`
border: 0;
padding: 8px;
font-size: 20px;
background-color: #2ABAA1;
color: ${({theme:{ colors } }) => colors.white};

&:hover {
    background-color: #88B2AB;
}`;

export const BtnWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
  `;