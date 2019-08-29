import React  from 'react';
import styled from 'styled-components';

const ModalButtonLeft = (props) => {
    return (
            <div className="left Container">
                <button onClick={ () => props.onClick('left') } className="leftbtn"></button>
            </div>
    )
}

export default ModalButtonLeft;




