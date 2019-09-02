import React  from 'react';


var ModalEntryMain = (props) => {

        return (
        <div className="modalMain">
            <div className="left Container">
                <button onClick={ () => props.onClick('left') } className="leftbtn"></button>
            </div>
            <img className="modalMainPhoto" src={props.main[0].url} ></img>
            <div className="right Container">
                <button onClick={ () => props.onClick('right') } className="rightbtn"></button>
            </div>
        </div>
        )
}

export default ModalEntryMain;

