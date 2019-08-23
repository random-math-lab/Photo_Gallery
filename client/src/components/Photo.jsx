import React  from 'react';
import PhotoEntry from './PhotoEntry.jsx'

class Photo extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            thing: props,
            photos: []
        }
        this.thing = console.log(props)
    }
    render() {
        return(
        <div>
        </div> 
        )
    }
}

export default Photo;

