import React  from 'react';
import * as sc from '../styles/PhotoEntryMainStyles';

var PhotoEntryMain = (props) => {

        return (
            <sc.MainPhotoContainer>
                <sc.MainPhoto background={props.data[0].url}/>
            </sc.MainPhotoContainer>
        )
    
}

export default PhotoEntryMain;