import React  from 'react';
import * as sc from '../styles/PhotoEntryMainStyles';

var PhotoEntryMain = (props) => {
    var { mainPhoto, toggleModal } = props;
        return (
            <sc.MainPhotoContainer>
                <sc.MainPhoto 
                    onClick={() => {
                        toggleModal()
                    }} 
                    image={mainPhoto[0].url}>
                </sc.MainPhoto>
            </sc.MainPhotoContainer>
        )  
};

export default PhotoEntryMain;