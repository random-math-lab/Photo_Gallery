import React  from 'react';

var PhotoEntryGrid = (props) => {
        return (
        <div className="columngrid">
            <img className="grid image-box" src={props.data[0].url}></img>
            <img className="grid image-box" src={props.data[1].url}></img>
            <img className="grid image-box" src={props.data[2].url}></img>
            <img className="grid image-box" src={props.data[3].url}></img>
        </div>
        )
}

export default PhotoEntryGrid;