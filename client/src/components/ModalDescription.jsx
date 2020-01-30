import React  from 'react';
import styled from 'styled-components';
import * as sc from '../styles/ModalDescriptionStyles';

var ModalDescription = (props) => {
    let { count, description, length } = props;
    return (
        <sc.DescriptionContainer>
            <p>{count}/{length}</p>
            <p>{description}</p>
        </sc.DescriptionContainer>
    )
}

export default ModalDescription;