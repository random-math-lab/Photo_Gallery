import React  from 'react';
import PhotoEntryMain from './PhotoEntryMain.jsx'
import PhotoEntryGrid from './PhotoEntryGrid.jsx'
import * as sc from '../styles/PhotoStyles';

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
            <sc.Row>
                    <PhotoEntryMain toggleModal={this.props.toggleModal} data={this.state.mainPhoto}/>
                    <PhotoEntryGrid toggleModal={this.props.toggleModal} data={this.state.subPhotos}/>
            </sc.Row>
        )
    }
}

export default Photo;

