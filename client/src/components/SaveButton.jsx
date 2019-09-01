import React  from 'react';
import styled from 'styled-components';

const SaveButton = (props) => {
    return (
            <div className="savebtnContainer">
                <button className="savebtn">Save</button>
                    <div>
                        <div id="savemodal" className="modal">
                            <div className="savemodal-content">
                                <div className="savemodalMain">
                                
                                </div>
                            </div>   
                        </div>
                    </div>
            </div>
    )
}

export default SaveButton;




