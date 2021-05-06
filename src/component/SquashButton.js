import React from 'react';
import styled, { keyframes } from 'styled-components';

const squashDown = (width, height, top) => {
    var toWidth = parseInt(width * 1.4);
    var toWidth2 = parseInt(width * 0.6);
    var toHeight = parseInt(height * 0.6);
    var toHeight2 = parseInt(height * 1.4);
    var toTop = parseInt(top * -1 * 0.1);
    var toTop2 = parseInt(height * 0.2);
    var toTop3 = parseInt(height * 0.2);

    return (keyframes`
        0% {
            margin-top: ${top}px;
        }
        85%{
            margin-top: ${toTop}px;
            width: ${width}px;
            height: ${height}px;
        }
        90% {
            marginTop: ${toTop2}px;
            width: ${toWidth}px;
            height: ${toHeight}px;
        }
        95% {
            margin-top: ${toTop3}px;
            width: ${toWidth2}px;
            height: ${toHeight2}px;
        }
        100% {
            width: ${width}px;
            height: ${height}px;
            margin-top: 0px;
        }
    `);
}

const ButtonContainer = styled.div`
    display: flex;
    justifyContent: center;
    alignItems: center;
    background-color: #ffffff;
`;

const SButton = styled.button`
    background-color: #341434;
    width: ${props => {
        if(props.style) return props.style.width+"px" || "300px";
        else return "300px";
    }};
    height: ${props => {
        if(props.style) return props.style.height+"px" || "30px";
        else return "30px";
    }};
    border-radius: 0px;

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
    }} 1.5s 0s 1 ease-in;

    &:hover {
        background: #803180;
    }
    &:active {
        background: #341434;
    }
`;



function SquashButton(props) {
    return(
        <ButtonContainer>
            <SButton startY={props.startY} style={props.style}/>
        </ButtonContainer>
    )
}

export default SquashButton;