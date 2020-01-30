import React  from 'react';
import ModalDescription from './ModalDescription.jsx';
import * as sc from '../styles/ModalEntryCarouselStyles';

var ModalEntryCarousel = (props) => {
    let { carousel, count } = props;
    return (
        <sc.CarouselContainer>
            <sc.ModalCarousel>
                <sc.ModalCarouselPhoto image={carousel[2].url}/>
                <sc.ModalCarouselPhoto image={carousel[1].url}/>
                <sc.ModalCarouselPhotoCenter image={carousel[0].url}/>
                <sc.ModalCarouselPhoto image={carousel[carousel.length-1].url}/>
                <sc.ModalCarouselPhoto image={carousel[carousel.length-2].url}/>
                </sc.ModalCarousel>
                <ModalDescription description={carousel[0].description} count={count} length={carousel.length}/>
        </sc.CarouselContainer>
    );
};

export default ModalEntryCarousel;