import React  from 'react';
import styled from 'styled-components';
// import * as sc from '../styles/ModalPhotoEntryStyles';
import * as sc from '../styles/ModalEntryCarouselStyles';

var ModalPhotoEntry = (props) => {
   
        return (
        <div>
           <sc.ModalCarouselPhoto image={props.carousel[props.index].url}/> 
        </div>
        )
    
}

export default ModalPhotoEntry;
