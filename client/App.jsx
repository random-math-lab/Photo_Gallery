import React  from 'react';
import Photo from './src/components/Photo.jsx';
import DemoCarousel from './src/components/Carousel.jsx'
import { Carousel } from 'react-responsive-carousel';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingid: 1,
            mainphoto: "",
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
        fetch('/api/photo/:id')
        .then(response => response.json())
        .then(data => this.setState({}));
    }

    componentDidMount() {
        this.GetData()
        // var listing = this.getListingPhotos();
        // this.setState({
        //     photolist: listing
        // })
    }

    render() {
        return(
            <div>
                <h1>PHOTO</h1>
                <Photo data={this.state.photolist}/>
                <Carousel/>
            </div>
        )
    }
}

export default App


