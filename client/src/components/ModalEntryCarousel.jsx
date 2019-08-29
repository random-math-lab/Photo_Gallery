import React  from 'react';
import styled from 'styled-components';

var ModalEntryCarousel = (props) => {
    return (
        <div className="modalCarousel">
            <img className="modalCarouselPhoto" src={props.carousel[2].url} ></img>
            <img className="modalCarouselPhoto" src={props.carousel[1].url} ></img>
            <img className="modalCarouselPhoto center" src={props.carousel[0].url} ></img>
            <img className="modalCarouselPhoto" src={props.carousel[props.carousel.length-1].url} ></img>
            <img className="modalCarouselPhoto" src={props.carousel[props.carousel.length-2].url} ></img>
        </div>
    )
}

export default ModalEntryCarousel;