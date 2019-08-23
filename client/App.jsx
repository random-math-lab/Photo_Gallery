import React  from 'react';
import Photo from './src/components/Photo.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingid: 1,
            mainphoto: "1.png",
            photolist: this.props.data(),
            listingphotos: []
        }
        this.all = console.log('all photos: ',this.state.photolist)
        this.listing = console.log('listing only: ',this.getListingPhotos())
    }

    getListingPhotos () {
        var photos = this.state.photolist;
        var listingphotos = [];
        for (var i = 0; i < photos.length; i++) {
            if (photos[i].listingId === this.state.listingid) {
                listingphotos.push(photos[i])
            }
        }
        this.setState({
            listingphotos: listingphotos
        })
        return listingphotos;
    }

    GetData () {
        fetch('/')
        .then(response => response.json())
        .then(data => this.setState({}));
    }

    componentDidMount() {
        var listing = this.getListingPhotos();
        this.setState({
            photolist: listing
        })
    }

    render() {
        return(
            <div>
                <h1>PHOTO</h1>
                <Photo data={this.state.photolist}/>
            </div>
        )
    }
}

export default App


