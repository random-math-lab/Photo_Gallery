import React from 'react';
import * as sc from '../styles/PhotoEntryGridStyles';

var PhotoEntryGrid = (props) => {
    var { subPhotos, toggleModal } = props;
    return(
        <sc.Gridphotobox>
            <sc.Gridcolumn1>
                <sc.Grid>
                    <sc.Gridphoto 
                        onClick={() => {
                            toggleModal()
                        }} 
                        image={subPhotos[0].url}>
                    </sc.Gridphoto>
                </sc.Grid>
                <sc.Grid>
                    <sc.Gridphoto 
                        onClick={() => {
                            toggleModal()
                        }}
                        image={subPhotos[1].url}>
                    </sc.Gridphoto>
                </sc.Grid>
            </sc.Gridcolumn1>
            <sc.Gridcolumn2>
                <sc.Grid>
                    <sc.Gridphoto 
                        onClick={() => {
                            toggleModal()
                        }}
                        image={subPhotos[2].url}>
                    </sc.Gridphoto>  
                </sc.Grid>
                <sc.Grid>
                    <sc.Gridphoto 
                        onClick={() => {
                            toggleModal()
                        }}
                        image={subPhotos[3].url}>
                    </sc.Gridphoto>
                </sc.Grid>
            </sc.Gridcolumn2>
        </sc.Gridphotobox>
    );
}

export default PhotoEntryGrid;