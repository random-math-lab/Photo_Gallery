import React  from 'react';
import styled from 'styled-components';
import ModalEntryMain from './ModalEntryMain.jsx'
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
        this.handleCarouselToggle = this.handleCarouselToggle.bind(this)
    }

    handleCarouselToggle (direction) {
        let main = main;
        let carousel = carousel;
        let length = carousel.length;
        let count = count;
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
            let photo = carousel[length-1]
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
        let { main, carousel, count } = this.state;
        let { handleCarouselToggle } = this;
        let { hidden, toggleModal} = this.props;
        return (
            <div>
                <sc.Modal hidden={hidden}>
                    <sc.ModalContent>
                        <ModalEntryMain main={main} onClick={handleCarouselToggle} />
                        <ModalEntryCarousel main={main} carousel={carousel} count={count}/>
                        <sc.CloseBtnContainer>
                            <sc.CloseBtn>
                                <span onClick={toggleModal} data-dismiss="modal">&times;</span>  
                            </sc.CloseBtn>
                        </sc.CloseBtnContainer>
                    </sc.ModalContent>   
                </sc.Modal>
            </div>
        )
    }
}

export default Modal;




