import styled from 'styled-components';
import {  littleGlow } from '../animations/animations.sc';

export const Logobox = styled.div`
    width: 70%;
`

export const Logo = styled.img`
    max-height: 128%;
    position: fixed;
    top: -8%;
    :hover {
    animation: ${littleGlow} 1s ease-out;
    }
`