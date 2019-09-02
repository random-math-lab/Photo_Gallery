import React  from 'react';
import Photo from './Photo.jsx';
import Modal from './Modal.jsx';
import axios from 'axios';
import ShareButton from './ShareButton.jsx';
import SaveButton from './SaveButton.jsx';
import ViewPhotoButton from './ViewPhotoButton.jsx';

import Dummy from './Dummy.jsx';



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingid: 3,
            mainphoto: "",
            listingphotos: this.props.data,
            photos: [  ]
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
        .catch(err => console.log("error"))
    }

    componentDidMount() {
        this.getData()
        this.setState({listingphotos: this.getListingPhotos(this.props.data)})
    }

    render() { 
        if (this.state.photos.length > 0) {
            return(
                <div className="gallery">
                    <div className="searchbar"></div>
                    <Dummy data={this.state.photos[0]}/>
                    {this.state && this.state.photos && <Modal data={this.state.photos}/>}
                    {this.state && this.state.photos && <Photo data={this.state.photos}/>}
                    <div className="btnContainer">
                        <div className="sharesave">
                            <ShareButton/>
                            <SaveButton/>
                        </div>
                        <ViewPhotoButton/>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}



export default App


