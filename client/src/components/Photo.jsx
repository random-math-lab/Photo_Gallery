import React  from 'react';
import PhotoEntryMain from './PhotoEntryMain.jsx'
import PhotoEntryGrid from './PhotoEntryGrid.jsx'

class Photo extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            thing: props,
            mainPhoto: [this.props.data[0]],
            gridPhotos: [this.props.data[1],this.props.data[2],this.props.data[3],this.props.data[4]]
        }
    }

    render() {
        return (
            <div className="row">
                <div className="gallery">
                    <PhotoEntryMain data={this.state.mainPhoto}/>
                    <PhotoEntryGrid data={this.state.gridPhotos}/>
                </div>
            </div>
        )
    }
}

export default Photo;

