import React  from 'react';

class PhotoEntry extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            thing: props,
            photos: []
        }
    }
    render() {
        return (
        <div>
            <img src={this.props.data.url}></img>
            <h6>${this.props.data.description}</h6>
        </div>
        )
    }
}

export default PhotoEntry;