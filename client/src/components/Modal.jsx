import React  from 'react';
import styled from 'styled-components';
import ModalEntryMain from './ModalEntryMain.jsx';
import ModalEntryCarousel from './ModalEntryCarousel.jsx'
import * as sc from '../styles/ModalStyles';
import ModalDescription from './ModalDescription.jsx';

class Modal extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            main: [props.data[0]],
            carousel: props.data,
            count: 1,
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick (direction) {
        var main = this.state.main;
        var carousel = this.state.carousel;
        var length = carousel.length;
        var count = this.state.count;
        if(direction === "left") {
            carousel.splice(0,1)
            carousel.push(main[0])
            if(count === 1) {
                count = length
            } else {
                count--
            }
            this.setState({
                main: [carousel[0]],
                carousel: carousel,
                count: count
            })
        } else {
            var photo = carousel[length-1]
            carousel.splice(length-1 ,1)
            carousel.splice(0,0, photo)
            if(count === length) {
                count = 1
            } else {
                count++
            }
            this.setState({
                main: [carousel[0]],
                carousel: carousel,
                count: count
            })
        }
    }
    render() {
        return (
            <div>
                <sc.Modal hidden={this.props.hidden}>
                    <sc.ModalContent>
                        <ModalEntryMain 
                            main={this.state.main} 
                            onClick={this.onClick} 
                        />
                        <ModalEntryCarousel 
                            main={this.state.main} 
                            carousel={this.state.carousel} 
                            count={this.state.count}
                            hidden={this.props.hidden}
                        />
                        <sc.CloseBtnContainer>
                            <sc.CloseBtn>
                                <span 
                                    onClick={this.props.toggleModal} 
                                    data-dismiss="modal">&times;
                                </span>  
                            </sc.CloseBtn>
                        </sc.CloseBtnContainer>
                    </sc.ModalContent>   
                </sc.Modal>
            </div>
        )
    }
}

export default Modal;




