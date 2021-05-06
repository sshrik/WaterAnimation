import React from 'react';
import styled, { keyframes } from 'styled-components';

import {SquashContainer, squashDown} from './SquashComponent';

const SButton = styled.button`
    width: ${props => {
        if(props.style) return props.style.width+"px" || "300px";
        else return "300px";
    }};
    height: ${props => {
        if(props.style) return props.style.height+"px" || "30px";
        else return "30px";
    }};

    animation: ${props => {
        var width, height;
        if(props.style) {
            width = props.style.width || 300;
            height = props.style.height || 300;
        }
        else {
            width = 300;
            height = 30;
        }
        var top = props.startY;
        return squashDown(width, height, top);
    }} 1s 0s 1 ease-in;
`;

function SquashButton(props) {
    return(
        <SquashContainer>
            <SButton startY={props.startY} style={props.style}/>
        </SquashContainer>
    )
}

export default SquashButton;