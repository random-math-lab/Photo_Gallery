import React from 'react';
import axios from 'axios';
import Photo from './Photo.jsx';
import Modal from './Modal.jsx';
import ShareButton from './ShareButton.jsx';
import SaveButton from './SaveButton.jsx';
import ViewPhotoButton from './ViewPhotoButton.jsx';
import * as sc from '../styles/AppStyle';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingid: 3,
      mainphoto: '',
      photos: [],
      modal: 'none',
    };
    this.getPhotos = this.getPhotos.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    let modal = this.state.modal;
    if (modal === 'none') {
      modal = 'block';
    } else if (modal === 'block') {
      modal = 'none';
    }
    this.setState({ modal });
  }

  getPhotos() {
    axios('http://localhost:3306/api/photo/:id')
      .then((res) => res.data)
      .then((photos) => this.setState({ photos }))
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getPhotos();
  }

  render() { 
    var { listingid, mainphoto, photos, modal } = this.state;
    var { toggleModal } = this;
    if (this.state.photos.length > 0) {
      return(
        <sc.Main>
          <sc.Gallery>
              <sc.Searchbar></sc.Searchbar>
              <Modal data={photos} hidden={modal} toggleModal={toggleModal}/>
              <div onClick={toggleModal} className="gallery"></div>
              <Photo data={photos} toggleModal={toggleModal}/>
              <sc.BtnContainer>
                  <sc.ShareSave>
                      <ShareButton/>
                      <SaveButton/>
                  </sc.ShareSave>
                  <ViewPhotoButton toggleModal={toggleModal}/>
              </sc.BtnContainer>
          </sc.Gallery>
          </sc.Main>
      )
    } else {
      return null;
    } 
  }
}


export default PhotoGallery;
