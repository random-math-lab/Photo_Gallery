import React  from 'react';

class PhotoEntryMain extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            photos: []
        }
    }
    render() {
        return (
        <div className="columnmain image-box">
            <figure className={`gallery__item gallery__item--${this.props.num}`}>
                    <img className="mainphoto" src={this.props.data[0].url} ></img>
            </figure>
        </div>
        )
    }
}

export default PhotoEntryMain;