import React  from 'react';

class PhotoEntryMain extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            photos: []
        }
    }
    render() {
        return (
        <div className="mainphotobox">
            <img className="mainphoto" src={this.props.data[0].url} ></img>
        </div>
        )
    }
}

export default PhotoEntryMain;