import React  from 'react';
import styled from 'styled-components';
import * as sc from '../styles/ViewPhotoButtonStyles';

const ViewPhotoButton = (props) => {
    return (
            <sc.ViewBtn onClick={props.toggleModal}>View Photo</sc.ViewBtn>
    )
}

export default ViewPhotoButton;




