import styled, { keyframes } from 'styled-components';
import img from '../../sources/images/IMG_6747.jpg';
import { littleGlow } from '../animations/animations.sc';
import { Link } from 'react-router-dom';

const moveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    80% {
        transform: translateX(10px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
`
export const MainWrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #777;
    padding: 10px;
`

const moveInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(300px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
`   

export const Header = styled.header`
    position: relative;
    height: 95vh;
    background-image: linear-gradient(
            to right bottom,
            rgba(153, 255, 187, 0.4),
            rgba(0, 204, 109, 0.7)),
    url(${img});
    background-size: cover;
    background-position: top;
    clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
    & body {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.7;
        color: #777;
        padding: 30px;
    }
`

export const Logobox = styled.div`
    position: absolute;
    top: 40px;
    left: 40px;
`

export const Logo =styled.img`
    max-height: 180px;
    :hover {
    animation: ${littleGlow} 1s ease-out;
    }
`

export const MainBox = styled.div`
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

export const StartTextBox = styled.h1`
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 40px;
`
export const StartText = styled.span`
    display: block;
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 24px;
    animation: ${moveInLeft} 2s ease-out;
`

export const StartButton = styled(Link)`
    &:link; 
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0,0,0,.2);
    }
    text-decoration: none;
    background-color: rgba(226, 221, 221, .3);
    color: #fff;
    border-radius: 28px;
    padding: 20px 90px;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 24px;

    &:visited {
        text-decoration: none;
        text-transform: uppercase;
        padding: 15px 20px;
        display: inline-block;
        border-radius: 28px;
        transition: all .2s;
        position: relative;
    }

    &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 28px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }

    &:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
        background-color: rgba(226, 221, 221, .3);
    }

    animation: ${moveInBottom} .5s ease-out .75s;
    animation-fill-mode: backwards;
}
`
