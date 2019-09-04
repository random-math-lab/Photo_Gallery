import styled from 'styled-components';

export const Modal = styled.div`
display: ${props => props.hidden};
position: fixed;
z-index: 1;
left: 0;
top: 0;
height: 100%;
width: 100%;
overflow: auto;
background-color: rgba(255,255,255, 1);
`;
Modal.displayName = 'Modal';

export const ModalContent = styled.div`
display: inline-flex;
background-color: rgba(255,255,255, 1);
height: 100%;
width: 100%;
margin-top: 130px;
`;
ModalContent.displayName = 'ModalContent';

export const CloseBtnContainer = styled.div`
position: absolute;
right: 1.75%;
top: 5.75%;
height: 70px;
width: 70px;
align-content: center;
`;
CloseBtnContainer.displayName = 'CloseBtnContainer';