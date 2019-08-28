import React  from 'react';
import Photo from './src/components/Photo.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listingid: 1,
            mainphoto: "",
            photolist: this.props.data,
            listingphotos: []
        }
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

    // GetData () {
    //     fetch('/api/photo/:id')
    //     .then(response => response.json())
    //     .then(data => this.setState({}));
    // }

    // componentDidMount() {
    //     this.GetData()

    // }

    render() {
        return(
            <div>
                <Photo data={this.state.photolist}/>
            </div>
        )
    }
}

export default App


