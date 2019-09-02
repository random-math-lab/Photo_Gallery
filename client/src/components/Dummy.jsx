import React  from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// class Dummy extends React.Component {
//     constructor(props) {
//         super (props);
//         this.state = {
//             url: this.props.data,
//             mainPhoto: [props.data[0]],
//             subPhotos: [props.data[1], props.data[2], props.data[3], props.data[4]]
//         }
//         this.func()
//     }

//     func () {
//         console.log(this.state)
//     }

//     render() {
//         return (
// <div>
    
// </div>
//         )
//     }
// }

var Dummy = (props) => {
    if(props.data !== undefined) {
        console.log(props.data.url)
    }
    return (
        <div>
            <h1></h1>
        </div>
    )

}

export default Dummy;

// Dummy.propTypes = {
//     data: PropTypes.shape({
//         id: PropTypes.number,
//         linstingId: PropTypes.number,
//         url: PropTypes.string,
//         description: PropTypes.string
//     }).isRequired
// };
