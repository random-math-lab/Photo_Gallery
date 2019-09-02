import styled from 'styled-components';

export const MainPhotoContainer = styled.div`
float: left;
width: 50%;
height: 100%;
padding: 0px;
overflow: hidden;
`;
MainPhotoContainer.displayName = 'MainPhotoContainer';

export const MainPhoto = styled.div`
display: inline-block;
border-color: black;
border-width: thin;
border-style: solid;
width: 100%;
height: 100%;
cursor: pointer;
background-repeat:no-repeat;
background-size: auto;
background: url(${props => props.background});
`;
MainPhoto.displayName = 'MainPhoto';

export const Collage = styled.div`
transition: transform 0.35s ease 0s;
transform: scale(1.05);
transform-origin: 50% 50%;
cursor: pointer;
`;
Collage.displayName = 'Collage';