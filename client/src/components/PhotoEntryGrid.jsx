import React  from 'react';

var PhotoEntryGrid = (props) => {
        return (
        <div className="gridphotobox">
            <div className="gridcolumn1">
                <div className="grid">
                <img className="gridphoto collage" src={props.data[0].url}></img>
                </div>
                <div className="grid">
                <img className="gridphoto collage" src={props.data[1].url}></img>\
                </div>
            </div>
            <div className="gridcolumn2">
                <div className="grid">
                <img className="gridphoto collage" src={props.data[2].url}></img>
                </div>
                <div className="grid">
                <img className="gridphoto collage" src={props.data[3].url}></img>
                </div>
            </div>

        </div>
        )
}

export default PhotoEntryGrid;