import React  from 'react';
import styled from 'styled-components';
import * as sc from '../styles/ModalPhotoEntryStyles';

var ModalPhotoEntry = (props) => {
        return (
            <sc.ModalPhotoContainer image={props.data.url}>
                <h6>${props.data.description}</h6>
            </sc.ModalPhotoContainer>
        )
    
}

export default ModalPhotoEntry;
