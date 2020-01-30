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
        var { mainPhoto } = this.state;
        var { toggleModal } = this.props;
        return (
            <sc.Row>
                <PhotoEntryMain toggleModal={toggleModal} mainPhoto={mainPhoto}/>
                <PhotoEntryGrid toggleModal={toggleModal} subPhotos={subPhotos}/>
            </sc.Row>
        )
    }
}

export default Photo;

