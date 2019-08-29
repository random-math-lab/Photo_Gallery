import React  from 'react';
import ModalButtonLeft from './ModalButtonLeft.jsx'
import ModalButtonRight from './ModalButtonRight.jsx'


var ModalEntryMain = (props) => {

        return (
        <div className="modalMain">
            <ModalButtonLeft onClick={props.onClick}/>
            <img className="modalMainPhoto" src={props.main[0].url} ></img>
            <ModalButtonRight onClick={props.onClick}/>
        </div>
        )
}

export default ModalEntryMain;

