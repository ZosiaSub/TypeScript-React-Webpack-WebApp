import { keyframes } from 'styled-components';

export const littleGlow = keyframes`
    0% {
            opacity: -0.5;
        }
    100% {
            opacity: 1;
    }
`
export const moveInLeft = keyframes`
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