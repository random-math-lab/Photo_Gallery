import React  from 'react';
import ModalDescription from './ModalDescription.jsx';
import ModalPhotoEntry from './ModalPhotoEntry.jsx';
import * as sc from '../styles/ModalEntryCarouselStyles';



var ModalEntryCarousel = (props) => {
    var { main, carousel, count} = props;
    return (
        <sc.CarouselContainer>
            <sc.ModalCarousel>
                {carousel.map((entry, index) => (
                    <ModalPhotoEntry main={main} carousel={carousel} count={count} index={index}/>
                ))}
            </sc.ModalCarousel>
                <ModalDescription description={props.carousel[0].description} count={props.count} length={props.carousel.length}/>
        </sc.CarouselContainer>
    );
};

export default ModalEntryCarousel;