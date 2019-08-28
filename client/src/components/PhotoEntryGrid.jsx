import React  from 'react';

class PhotoEntryGrid extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            thing: props,
            photos: []
        }
    }
    render() {
        return (
        <div className="columngrid">
            <img className="grid image-box" src={this.props.data[0].url}></img>
            <img className="grid image-box" src={this.props.data[1].url}></img>
            <img className="grid image-box" src={this.props.data[2].url}></img>
            <img className="grid image-box" src={this.props.data[3].url}></img>
        </div>
        )
    }
}

export default PhotoEntryGrid;