import React from 'react';
import axios from 'axios';
import Photo from './Photo.jsx';
import Modal from './Modal.jsx';
import ShareButton from './ShareButton.jsx';
import styled from 'styled-components';
import SaveButton from './SaveButton.jsx';
import ViewPhotoButton from './ViewPhotoButton.jsx';
import * as sc from '../styles/AppStyle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingid: 3,
      mainphoto: '',
      photos: [],
      modal: 'none',
    };
    this.getData = this.getData.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    let status = this.state.modal;
    if (status === 'none') {
      status = 'block';
    } else if (status === 'block') {
      status = 'none';
    }
    this.setState({ modal: status });
  }

  getData() {
    axios('/api/photo/:id')
      .then((res) => res.data)
      .then((photos) => this.setState({ photos }))
      .catch((err) => console.log('error'));
  }

  componentDidMount() {
    this.getData();
  }

  render() { 
        if (this.state.photos.length > 0) {
            return(
              <sc.Main>
                <sc.Gallery>
                    <sc.Searchbar></sc.Searchbar>
                    <Modal data={this.state.photos} hidden={this.state.modal} toggleModal={this.toggleModal}/>
                    <div onClick={this.toggleModal} className="gallery"></div>
                    <Photo data={this.state.photos} toggleModal={this.toggleModal}/>
                    <sc.BtnContainer>
                        <sc.ShareSave>
                            <ShareButton/>
                            <SaveButton/>
                        </sc.ShareSave>
                        <ViewPhotoButton toggleModal={this.toggleModal}/>
                    </sc.BtnContainer>
                </sc.Gallery>
                </sc.Main>
            )
        } else {
            return null;
        } 
    }
}


export default App;