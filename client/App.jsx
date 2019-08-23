import React  from 'react';
import Photo from './src/components/Photo.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mainphoto: "1.png",
            photolist: this.props.data()
        }
        this.data = console.log(props.data())
    }
    render() {
        return(
            <div>
            </div>
        )
    }
}

export default App

                    /* {this.state.photolist.map((entry) => {
                        <Photo description={entry.description}/>
                    })} */
