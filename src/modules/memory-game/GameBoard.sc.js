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

export const Board = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
`

export const MemoryImageBox = styled.div`
    height: 200px;
    width: 200px;
    border: 2px solid #94c6ac;
    border-radius: 10px;
    opacity: ${props => props.isAPair ? 0 : 1}; 
`

export const MemoryImage = styled.img`
    height: 196px;
    width: 196px;
    border-radius: 10px;
    opacity: ${props => props.isSelected ? 1 : 0}; 
    cursor: pointer;
`