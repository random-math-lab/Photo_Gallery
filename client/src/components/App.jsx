import React  from 'react';
import Photo from './Photo.jsx';
import Modal from './Modal.jsx';
import axios from 'axios';
import ShareButton from './ShareButton.jsx';
import SaveButton from './SaveButton.jsx';
import ViewPhotoButton from './ViewPhotoButton.jsx';



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingid: 3,
            mainphoto: "",
            listingphotos: this.props.data,
            photos: []
        }
        this.getListingPhotos = this.getListingPhotos.bind(this)
        this.getData = this.getData.bind(this)
    }

    getListingPhotos (photos) {
        var listingphotos = [];
        for (var i = 0; i < photos.length; i++) {
            if (photos[i].listingId === this.state.listingid) {
                listingphotos.push(photos[i])
            }
        }
        return listingphotos
    }

    getData() {
        axios('/api/photo/:id')
        .then( (res) => res.data )
        .then( (photos) => this.setState({photos: photos}))
    }

    componentDidMount() {
        this.getData()
        this.setState({listingphotos: this.getListingPhotos(this.props.data)})
    }

    render() {
        return(
            <div className="gallery">
                <div className="searchbar"></div>
                <Modal data={this.state.listingphotos}/>
                <Photo data={this.state.listingphotos}/>
                <div className="btnContainer">
                    <div className="sharesave">
                        <ShareButton/>
                        <SaveButton/>
                    </div>
                    <ViewPhotoButton/>
                </div>
            </div>
        )
    }
}



export default App


