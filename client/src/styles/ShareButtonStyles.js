import styled from 'styled-components';

export const Sharebtn = styled.button`
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
padding-top: 6px;
padding-bottom: 6px;
padding-left: 15px;
padding-right: 15px;
border-radius: 4px;
background: var(--color-buttons-inverse-color, #ffffff);
border-color: var(--color-buttons-inverse-border, transparent);
color: var(--color-buttons-inverse-text, #484848);
font-size: var(--font-button-small-font-size, 14px);
width: 96.22px;
height: 36px;
margin-left: 10px; 
background-image: url('https://fu11m3tal.s3-us-west-1.amazonaws.com/share.png');
background-size: 20%;
background-repeat: no-repeat;
text-align:right;
background-position: 18%;
cursor: pointer;
font-weight: 500;
`;
Sharebtn.displayName = 'Sharebtn';