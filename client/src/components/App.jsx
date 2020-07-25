import React from 'react';
import axios from 'axios';
import Photo from './Photo.jsx';
import Modal from './Modal.jsx';
import ShareButton from './ShareButton.jsx';
import styled from 'styled-components';
import SaveButton from './SaveButton.jsx';
import ViewPhotoButton from './ViewPhotoButton.jsx';
import * as sc from '../styles/AppStyle';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingid: 1,
      mainphoto: '',
      photos: [
        {
          id: 0, 
          listingId: 1, 
          url: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/5/10/zhongldfe9bfwrx7mun9/alex-albon-virtual-f1-spain", 
          description: "Redbull driver Alex Albon on old Soft tires during the 2019 Spanish Grand Prix"
        }, 
        {
          id: 0, 
          listingId: 1, 
          url: "https://cdn-1.motorsport.com/images/amp/68yXMQl0/s6/guanyu-zhou-uni-virtuosi-1.jpg", 
          description: "Renault debut of 2020 F1 livery"
        },
        {
          id: 0, 
          listingId: 1, 
          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ferraris-german-driver-sebastian-vettel-steers-his-car-news-photo-1594318599.jpg?crop=1xw:0.84375xh;center,top&resize=480:*", 
          description: "Sebastian Vettel in his last year with Scuderia Ferrari, buzz around the paddock is communcation with the Mercedes Silver Arrows is that a seat is open for the 3-time world champion."
        }, 
        {
          id: 0, 
          listingId: 1, 
          url: "https://s.yimg.com/ny/api/res/1.2/1tZObV76_rKjlV9muN3C6A--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en-US/reuters.com/50ddbd3021f3b9be2b080c82a85372cd", 
          description: "Mclaren on their way to their first P1 in over 10 years"
        }, 
        {
          id: 0, 
          listingId: 1, 
          url: "https://i2-prod.mirror.co.uk/incoming/article22305210.ece/ALTERNATES/s615/0_AUTO-PRIX-F1-AUT.jpg", 
          description: "Mercedes honors the Black Lives Matter movement with a new all black livery"
        }
      ],
      modal: 'none',
    };
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


  render() { 
        if (this.state.photos.length > 0) {
            return(
              <sc.Main>
                <sc.Gallery>
                    <sc.Searchbar></sc.Searchbar>
                    <Modal 
                      data={this.state.photos} 
                      hidden={this.state.modal} 
                      toggleModal={this.toggleModal}
                    />
                    <div 
                      onClick={this.toggleModal} className="gallery"></div>
                      <Photo 
                        data={this.state.photos} 
                        toggleModal={this.toggleModal}
                      />
                      <sc.BtnContainer>
                        <sc.ShareSave>
                            <ShareButton/>
                            <SaveButton/>
                        </sc.ShareSave>
                        <ViewPhotoButton 
                          toggleModal={this.toggleModal}
                        />
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
