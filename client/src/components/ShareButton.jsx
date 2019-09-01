import React  from 'react';
import styled from 'styled-components';

const ShareButton = (props) => {
    return (
            <div className="sharebtnContainer">
                <button className="sharebtn">Share</button>
                <div>
                    <div id="sharemodal" className="modal">
                        <div className="sharemodal-content">
                            <div className="sharemodalMain">
                            
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
    )
}

export default ShareButton;




