import React  from 'react';
import styled from 'styled-components';
import * as sc from '../styles/ViewPhotoButtonStyles';

const ViewPhotoButton = (props) => {
    return (
            <div>
                <button className="viewbtn" data-toggle="modal" data-target="#simplemodal">View Photos</button>
            </div>
    )
}

export default ViewPhotoButton;




