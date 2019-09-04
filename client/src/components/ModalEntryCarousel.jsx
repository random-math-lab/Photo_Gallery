import React  from 'react';
import ModalDescription from './ModalDescription.jsx';
import * as sc from '../styles/ModalEntryCarouselStyles';

var ModalEntryCarousel = (props) => {
    return (
        <sc.CarouselContainer>
            <sc.ModalCarousel>
                <sc.ModalCarouselPhoto image={props.carousel[2].url}/>
                <sc.ModalCarouselPhoto image={props.carousel[1].url}/>
                <sc.ModalCarouselPhotoCenter image={props.carousel[0].url}/>
                <sc.ModalCarouselPhoto image={props.carousel[props.carousel.length-1].url}/>
                <sc.ModalCarouselPhoto image={props.carousel[props.carousel.length-2].url}/>
            </sc.ModalCarousel>
                <ModalDescription description={props.carousel[0].description} count={props.count} length={props.carousel.length}/>
        </sc.CarouselContainer>
    );
};

export default ModalEntryCarousel;