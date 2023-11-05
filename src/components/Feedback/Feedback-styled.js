import { styled } from 'styled-components';

export const FeedbackCard = styled.div`
display: block;
`;

export const Headrest = styled.h2`
 font-size: 30px;
 margin-bottom: 20px;
`;

export const ButtonsList = styled.div`
display: flex;
gap: 5px;
margin-bottom: 20px;
`;

export const Button = styled.button`
border: 0;
background-color: #2ABAA1;
color: ${({theme:{ colors } }) => colors.white};

&:hover {
    background-color: #88B2AB;
}`;