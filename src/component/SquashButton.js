import React from 'react';
import styled, { keyframes } from 'styled-components';

const squashDown = (width, height, top, squashRatio=0.3, movingRatio=0.15) => {
    var bigSRatio = 1 + squashRatio;
    var smallSRatio = 1 - squashRatio;
    var toWidth = parseInt(width * bigSRatio);
    var toWidth2 = parseInt(width * smallSRatio);
    var toHeight = parseInt(height * smallSRatio);
    var toHeight2 = parseInt(height * bigSRatio);
    var toTop = parseInt(top * -1 * movingRatio);
    var toTop2 = parseInt(top * movingRatio);
    var toTop3 = parseInt(height * squashRatio);

    return (keyframes`
        0% {
            margin-top: ${top}px;
        }
        74%{
            margin-top: ${toTop}px;
            width: ${width}px;
            height: ${height}px;
        }
        84% {
            marginTop: ${toTop2}px;
            width: ${toWidth}px;
            height: ${toHeight}px;
        }
        94% {
            margin-top: ${toTop3}px;
            width: ${toWidth2}px;
            height: ${toHeight2}px;
        }
        100% {
            margin-top: 0px;
            width: ${width}px;
            height: ${height}px;
        }
    `);
}

const ButtonContainer = styled.div`
    display: flex;
    justifyContent: center;
    alignItems: center;
`;

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
        <ButtonContainer>
            <SButton startY={props.startY} style={props.style}/>
        </ButtonContainer>
    )
}

export default SquashButton;