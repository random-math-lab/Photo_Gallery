import styled from 'styled-components';

export const Gridphotobox = styled.div`
display: inline-flex;
        float: right;
        width: 50%;
        height: 100%;
`;
Gridphotobox.displayName = 'Gridphotobox';

export const Gridcolumn1 = styled.div`
width: 50%;
`;
Gridcolumn1.displayName = 'Gridcolumn1';

export const Gridcolumn2 = styled.div`
width: 50%;
`;
Gridcolumn2.displayName = 'Gridcolumn2';

export const Grid = styled.div`
width: 100%;
height: 50%;
overflow: hidden;
`;
Grid.displayName = 'Grid';

export const Gridphoto = styled.button`
justify-content: center;
align-content: center;
background-image: url(${props => props.image});
background-size: cover;
background-repeat:no-repeat;
position: relative;
display:block;
border-color: grey;
border-style: solid;
border-width: thin;
width: 100%;
height: 100%;
overflow: hidden;
cursor: pointer;
`;
Gridphoto.displayName = 'Gridphoto';

export const Collage = styled.div`
transition: transform 0.35s ease 0s;
`;
Collage.displayName = 'Collage';

export const CollageHover = styled.div`
transform: scale(1.05);
transform-origin: 50% 50%;
cursor: pointer;
`;
CollageHover.displayName = 'CollageHover';