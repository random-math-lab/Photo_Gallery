import styled from 'styled-components';

export const ModalMain = styled.div`
float: left;
width: 69%;
height: 525.86px;
display: inline-flex;
justify-content: center;
align-content: center;
margin-left: 0px;
`;
ModalMain.displayName = 'ModalMain';

export const ModalMainPhoto = styled.div`
background-image: url(${props => props.image});
display: relative;
background-size: cover;
background-repeat:no-repeat;
justify-self: center;
align-self: center;
width: 788.8px;
height: 525.86px;
border-radius: 16px;
cursor: pointer;
`;
ModalMainPhoto.displayName = 'ModalMainPhoto';


export const Leftbtn = styled.button`
float: left;
width: 73.6px;
height: 100%;
background-image: url('./LEFT.png');
background-size: 60%;
background-repeat: no-repeat;
background-position: 50%;
border-color:transparent;
cursor: pointer;
outline: none;
`;
Leftbtn.displayName = 'Leftbtn';

export const Rightbtn = styled.button`
float: right;
width: 73.6px;
height: 100%;
background-image: url('./RIGHT.png');
background-size: 60%;
background-repeat: no-repeat;
background-position: 50%;
border-color:transparent;
cursor: pointer;
outline: none;
`;
Rightbtn.displayName = 'Rightbtn';