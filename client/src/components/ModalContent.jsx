import React  from 'react';
import styled from 'styled-components';
import ModalEntryMain from './ModalEntryMain.jsx'
import ModalEntryCarousel from './ModalEntryCarousel.jsx'


const ModalContent = (props) => {
        return (
            <div className="modal-content">
                <ModalEntryMain main={props.main} onClick={props.onClick}/>
                <ModalEntryCarousel main={props.main} carousel={props.carousel}/>
                <span className="closedBtn">&times;</span>
            </div>
        )
}

export default ModalContent;
