import React, { Suspense, lazy }  from 'react';
import ModalDescription from './ModalDescription.jsx';
import ModalPhotoEntry from './ModalPhotoEntry.jsx';
import * as sc from '../styles/ModalEntryCarouselStyles';

class ModalEntryCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            main: props.main,
            carousel: props.carousel,
            count: props.count,
            images: {}
        }
    }

    componentDidUpdate() {
        
    }
    render() {
        var { main, carousel, count} = this.state;
        return (
            <sc.CarouselContainer>
                <sc.ModalCarousel>
                            {carousel.map((entry, index) => (
                                <ModalPhotoEntry 
                                    key={index} 
                                    main={main} 
                                    carousel={carousel} 
                                    count={count} 
                                    index={index}
                                    hidden={this.props.hidden}
                                />
                            ))}
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