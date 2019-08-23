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
            <h1>
                {this.props.description}
            </h1>
        </div>
        )
    }
}

export default PhotoEntry;