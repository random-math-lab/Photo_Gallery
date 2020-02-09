import React from 'react';
import * as sc from '../styles/PhotoEntryGridStyles';

var PhotoEntryGrid = (props) => {
    return(
        <sc.Gridphotobox>
            <sc.Gridcolumn1>
                <sc.Grid>
                    <sc.Gridphoto onClick={() => {
                    props.toggleModal()
                }} image={props.data[0].url}/>
                </sc.Grid>
                <sc.Grid>
                    <sc.Gridphoto onClick={() => {
                    props.toggleModal()
                }} image={props.data[1].url}/>
                </sc.Grid>
            </sc.Gridcolumn1>
            <sc.Gridcolumn2>
                <sc.Grid>
                    <sc.Gridphoto onClick={() => {
                    props.toggleModal()
                }} image={props.data[2].url}/>   
                </sc.Grid>
                <sc.Grid>
                    <sc.Gridphoto onClick={() => {
                    props.toggleModal()
                }} image={props.data[3].url}/>
                </sc.Grid>
            </sc.Gridcolumn2>
        </sc.Gridphotobox>
    );
}

export default PhotoEntryGrid;