import React  from 'react';
import styled from 'styled-components';

const ModalButtonRight = (props) => {
    return (
            <div className="right Container">
                <button onClick={ () => props.onClick('right') } className="rightbtn"></button>
            </div>
    )
}

export default ModalButtonRight;




