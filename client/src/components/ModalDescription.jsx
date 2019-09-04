import React  from 'react';
import styled from 'styled-components';
import * as sc from '../styles/ModalDescriptionStyles';

var ModalDescription = (props) => {

    return (
    <sc.DescriptionContainer>
        <p>{props.count}/{props.length}</p>
        <p>{props.description}</p>
    </sc.DescriptionContainer>
    )
}

export default ModalDescription;