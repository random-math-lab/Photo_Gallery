import React  from 'react';

var PhotoEntryGrid = (props) => {
        return (
        <div className="gridphotobox">
            <img className="gridphoto" src={props.data[0].url}></img>
            <img className="gridphoto" src={props.data[1].url}></img>
            <img className="gridphoto" src={props.data[2].url}></img>
            <img className="gridphoto" src={props.data[3].url}></img>
        </div>
        )
}

export default PhotoEntryGrid;