import React  from 'react';
import * as sc from '../styles/ModalEntryMainStyles';

var ModalEntryMain = (props) => {
    return (
        <sc.ModalMain>
            <sc.Leftbtn onClick={ () => props.onClick('left') }></sc.Leftbtn>
            <sc.ModalMainPhoto image={props.main[0].url}/>
            <sc.Rightbtn onClick={ () => props.onClick('right') }></sc.Rightbtn>
        </sc.ModalMain>
    )
};

export default ModalEntryMain;

