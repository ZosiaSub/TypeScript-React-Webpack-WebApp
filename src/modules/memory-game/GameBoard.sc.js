import styled from 'styled-components';
import { moveInLeft } from '../animations/animations.sc';

export const BoardWrapper = styled.div`
    height: 100%;
    width: 100%
    width: 100%;
    min-height: 80Vh;
    padding: 5vh;
    background-color: #e6fff2;
    border-radius: 12px;
`

export const Board= styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`