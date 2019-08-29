import React  from 'react';
import styled from 'styled-components';

class ModalPhotoEntry extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            thing: props,
            photos: []
        }
    }
        render() {
        return (
        <div>
            <img className="entry" src={this.props.data.url} width="300" height="200"></img>
            <h6>${this.props.data.description}</h6>
        </div>
        )
    }
}

export default ModalPhotoEntry;

// render() {
//     return (
//     <div>
//         <img className="entry" src={this.props.data.url} width="300" height="200"></img>
//         <h6>${this.props.data.description}</h6>
//     </div>
//     )
// }