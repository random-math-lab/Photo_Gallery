import React, { Suspense, lazy }  from 'react';
import ModalDescription from './ModalDescription.jsx';
import ModalPhotoEntry from './ModalPhotoEntry.jsx';
import * as sc from '../styles/ModalEntryCarouselStyles';

const Entry = lazy(() => import('./ModalPhotoEntry.jsx'));

class ModalEntryCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            main: props.main,
            carousel: props.carousel,
            count: props.count,
            visible: [],
            images: {}
        }
        this.isVisible = this.isVisible.bind(this);
    }

    isVisible(image, visible) {
        var images = this.state.images;
        if(visible) {
            images[image] = true;
        } else {
            images[image] = false;
        }
        this.setState({images: images})
    }

    componentDidUpdate() {
        
    }
    render() {
        var { main, carousel, count} = this.state;
        return (
            <sc.CarouselContainer>
                <sc.ModalCarousel>
                        {/* <Suspense fallback={<p>Loading</p>}> */}
                            {carousel.map((entry, index) => (
                                <ModalPhotoEntry 
                                    key={index} 
                                    main={main} 
                                    carousel={carousel} 
                                    count={count} 
                                    index={index}
                                    isVisible={this.isVisible}
                                    hidden={this.props.hidden}
                                />
                            ))}
                        {/* </Suspense> */}
                </sc.ModalCarousel>
                    <ModalDescription 
                        description={carousel[0].description} 
                        count={count} 
                        length={carousel.length}
                    />
            </sc.CarouselContainer>
        )
    }
}
// var ModalEntryCarousel = (props) => {
//     var { main, carousel, count} = props;
//     return (
//         <sc.CarouselContainer>
//             <sc.ModalCarousel>
//                     <Suspense fallback={renderLoader}>
//                         {carousel.map((entry, index) => (
//                             <Lazy key={index} main={main} carousel={carousel} count={count} index={index}/>
//                         ))}
//                     </Suspense>
//             </sc.ModalCarousel>
//                 <ModalDescription description={props.carousel[0].description} count={props.count} length={props.carousel.length}/>
//         </sc.CarouselContainer>
//     );
// };

export default ModalEntryCarousel;