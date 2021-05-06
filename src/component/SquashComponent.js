import styled, { keyframes } from 'styled-components';

export const SquashContainer = styled.div`
    display: flex;
    justifyContent: center;
    alignItems: center;
`;

export const squashDown = (width, height, top, squashRatio=0.3, movingRatio=0.15) => {
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
