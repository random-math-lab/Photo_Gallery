import React  from 'react';
import PhotoEntryMain from './PhotoEntryMain.jsx'
import PhotoEntryGrid from './PhotoEntryGrid.jsx'

class Photo extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            thing: props,
            mainPhoto: [props.data[0]],
            gridPhotos: [props.data[1], props.data[2], props.data[3], props.data[4]]
        }
    }

    render() {
        return (
            <div className="row">
                <div className="gallery">
                    <PhotoEntryMain data={this.state.mainPhoto} listingphotos={this.props.listingphotos}/>
                    <PhotoEntryGrid data={this.state.gridPhotos} listingphotos={this.props.listingphotos}/>
                </div>
            </div>
        )
    }
}

export default Photo;

