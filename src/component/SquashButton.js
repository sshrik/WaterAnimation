import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
    background-color: #341434;
    width: 300px;
    height: 30px;
    border-radius: 3px;
    &:hover {
        background: #803180;
    }
    &:active {
        background: #341434;
    }
  
`;

function SquashButton(props) {
    return(
        <Container style={Object.assign({}, props.style)}>

        </Container>
    )
}


export default SquashButton;