import styled from 'styled-components';

export const Gallery = styled.div`
width: 100%;
padding: 0;
margin: 0;
height: 445.5px;
`;
Gallery.displayName = 'Gallery';

export const Searchbar = styled.div`
width:100%;
height:80px;
background-color: orange;
background-size: 100%;
background-repeat: no-repeat;
background-position: 50%;
`;
Searchbar.displayName = 'Searchbar';

export const BtnContainer = styled.div`
float:right;
width: 65px;
height: 525.86px;
`;
BtnContainer.displayName = 'BtnContainer';

export const ShareSave = styled.div`
top: 100px;
right: 25px;
position: absolute;
float:right;
display: inline-flex;     
margin: 0px;
`;

export const Main = styled.div`
padding: 0;
margin: 0;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
font-size: 14px;
color: #484848;
background-color: #fff;
margin: 0;
-webkit-font-smoothing: antialiased;
`;

Main.displayName = 'Main';