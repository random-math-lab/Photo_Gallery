const styled = window.styled;

export const ModalPhotoContainer = styled.div`
justify-content: center;
align-content: center;
background-image: url(${props => props.image});
background-size: cover;
background-repeat:no-repeat;
position: relative;
`;
ModalPhotoContainer.displayName = 'Modal'