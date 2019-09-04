import styled from 'styled-components';

export const MainPhotoContainer = styled.div`
float: left;
width: 50%;
height: 100%;
padding: 0px;
overflow: hidden;
`;
MainPhotoContainer.displayName = 'MainPhotoContainer';

export const MainPhoto = styled.button`
justify-content: center;
align-content: center;
background-image: url(${props => props.image});
background-size: cover;
background-repeat:no-repeat;
position: relative;
border-color: black;
border-width: thin;
border-style: solid;
width: 100%;
height: 100%;
cursor: pointer;
`;
MainPhoto.displayName = 'MainPhoto';

export const Collage = styled.div`
transition: transform 0.35s ease 0s;
transform: scale(1.05);
transform-origin: 50% 50%;
cursor: pointer;
`;
Collage.displayName = 'Collage';