import styled from 'styled-components';

export const CarouselContainer = styled.div`
float: right;
width: 28%;
height: 525.86px;
justify-content: center;
align-content: center;
`;
CarouselContainer.displayName = 'CarouselContainer';

export const ModalCarousel = styled.div`
margin-bottom: 20px;
padding-bottom: 25px;
display: inline-flex;
position: relative;
overflow: hidden;
cursor: pointer;
`;
ModalCarousel.displayName = 'ModalCarousel';

export const ModalCarouselAfter = styled.div`
z-index: 1;
content: '';
position: absolute;
display: inline-flex;
left: 25px; right: 25px;
top: 0; bottom: 0;
background-image:
  linear-gradient(to right,white, rgba(0,128,128,0) 100px),
  linear-gradient(to left , white, rgba(0,128,128,0) 100px);
`;
ModalCarouselAfter.displayName = 'ModalCarouselAfter';

export const ModalCarouselPhoto = styled.div`
justify-content: center;
align-content: center;
background-image: url(${props => props.image});
background-size: cover;
background-repeat:no-repeat;
position: relative;
margin: 5px;
width: 64px;
height: 64px;
border-radius: 4px;
top: 30px;
cursor: pointer;
`;
ModalCarouselPhoto.displayName = 'ModalCarouselPhoto';

export const ModalCarouselPhotoCenter = styled.div`
justify-content: center;
align-content: center;
background-image: url(${props => props.image});
background-size: cover;
background-repeat:no-repeat;
position: relative;
margin: 5px;
width: 63px;
height: 63px;
border-radius: 4px;
top: 30px;
cursor: pointer;
border-color: grey;
border-style: solid;
width: 64px;
height: 64px;
cursor: pointer;
`;
ModalCarouselPhotoCenter.displayName = 'ModalCarouselPhotoCenter';