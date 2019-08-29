import React  from 'react';
import ModalContent from './ModalContent.jsx';
import styled from 'styled-components';

class Modal extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            hidden: true,
            main: [props.data[0]],
            carousel: [props.data[0], props.data[1], props.data[2], props.data[3], props.data[4]],
            currentIndex: 0,
            listingPhotos: []
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick (direction) {
        var main = this.state.main;
        var carousel = this.state.carousel;
        var currentIndex = this.state.currentIndex;
        var length = carousel.length;
        var newIndex;
        var newMain;

        if(direction === "left") {
            carousel.splice(0,1)
            carousel.push(main[0])
            this.setState({
                main: [carousel[0]],
                carousel: carousel
            })
        } else {
            var photo = carousel[length-1]
            carousel.splice(length-1 ,1)
            carousel.splice(0,0, photo)
            this.setState({
                main: [carousel[0]],
                carousel: carousel
            })
        }
    }
    render() {
        return (
            <div>
                <button id="modalBtn" className="button" data-toggle="modal" >Modal Button</button>
                <div id="simplemodal" className="modal">
                    <ModalContent main={this.state.main} carousel={this.state.carousel} onClick={this.onClick}/>   
                </div>
            </div>
        )
    }
}

export default Modal;




