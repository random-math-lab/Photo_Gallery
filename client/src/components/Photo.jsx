import React  from 'react';
import PhotoEntryMain from './PhotoEntryMain.jsx'
import PhotoEntryGrid from './PhotoEntryGrid.jsx'

class Photo extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            mainPhoto: [props.data[0]],
            subPhotos: [props.data[1], props.data[2], props.data[3], props.data[4]]
        }
    }

    render() {
        return (
            <div className="row">
                <div className="gallery">
                    <PhotoEntryMain data={this.state.mainPhoto}/>
                    <PhotoEntryGrid data={this.state.subPhotos}/>
                </div>
            </div>
        )
    }
}

export default Photo;

