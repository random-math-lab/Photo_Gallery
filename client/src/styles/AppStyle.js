import styled from 'styled-components';

export const Gallery = styled.div`
width: 100%;
height: 445.5px;
`;
Gallery.displayName = 'Gallery';

export const Searchbar = styled.div`
width:100%;
height:80px;
background-image: url('./searchbar.png');
background-size: 100%;
background-repeat: no-repeat;
background-position: 50%;
`;
Searchbar.displayName = 'Searchbar';

export const BtnContainer = styled.div`
float:right;
width: 65%;
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

ShareSave.displayName = 'ShareSave';