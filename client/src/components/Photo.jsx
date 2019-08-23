import React  from 'react';
import PhotoEntry from './PhotoEntry.jsx'

class Photo extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            thing: props,
            photos: []
        }
    }
    render() {
        return(
        <div>
            <h1>Gallery</h1>
            {this.props.data.map((category) =>
            <PhotoEntry data={category}/>
             )}
        </div> 
        )
    }
}

export default Photo;

 