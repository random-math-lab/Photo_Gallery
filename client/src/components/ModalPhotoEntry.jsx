import React from 'react';
import styled from 'styled-components';

import * as sc from '../styles/ModalEntryCarouselStyles';

import VizSensor from 'react-visibility-sensor';

class ModalPhotoEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: props.index,
      imgViz: true,
      carousel: props.carousel
    }
    this.lazyLoad = this.lazyLoad.bind(this);
  }

  lazyLoad() {
        if(this.state.imgViz) {
              return this.props.carousel[this.props.index].url   
        } else {
              return ""
        }
  }

  render() {
        return(
                <VizSensor
                        onChange={(isVisible) => {
                              this.setState({imgViz: isVisible})
                        }}>
                        <sc.ModalCarouselPhoto image={this.lazyLoad()}/> 
                </VizSensor>
        )
  }
}

export default ModalPhotoEntry;
