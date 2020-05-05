import styled from 'styled-components';
import {  littleGlow } from '../animations/animations.sc';

export const Logobox = styled.div`
    position: absolute;
    top: 30px;
    left: 30px;
`

export const Logo =styled.img`
    max-height: 100px;
    :hover {
    animation: ${littleGlow} 1s ease-out;
    }
`