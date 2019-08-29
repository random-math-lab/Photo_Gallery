import React  from 'react';
import Photo from './src/components/Photo.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingid: 2,
            mainphoto: "",
            listingphotos: this.props.data
        }
        this.getListingPhotos = this.getListingPhotos.bind(this)
        this.getAllPhotos = this.getAllPhotos.bind(this)
    }

    getListingPhotos () {
        var photos = this.state.photolist;
        var listingphotos = [];
        for (var i = 0; i < photos.length; i++) {
            if (photos[i].listingId === this.state.listingid) {
                listingphotos.push(photos[i])
            }
        }
        return listingphotos
    }

    getAllPhotos () {
        fetch('/api/photo/:id')
        .then(response => response)
        .then(data => this.setState({photolist: data}));
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <div>
                <Photo data={this.state.listingphotos}/>
            </div>
        )
    }
}

export default App


