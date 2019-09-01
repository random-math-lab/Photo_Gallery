import React  from 'react';
import * as sc from '../styles/PhotoEntryMainStyles';

var PhotoEntryMain = (props) => {

        return (
            <sc.MainPhotoContainer>
                <sc.MainPhoto>
                    <sc.Collage>
                    <img src={props.data[0].url}></img>
                    </sc.Collage>
                </sc.MainPhoto>
            </sc.MainPhotoContainer>
        )
    
}

export default PhotoEntryMain;