import React, { useContext, memo } from 'react';
import { BoardWrapper, Board } from './GameBoard.sc.js';

interface MemoryBoardProps {
    images: [
      
        {
            img: {
                contentType: string,
                data: string,
            },
            title: string,
        }    
        
    ]
}
function MemoryBoard(props: MemoryBoardProps): 
JSX.Element {
    
    console.log('Board', props)
    return (
        <BoardWrapper>
            <Board>

            </Board>
        </BoardWrapper>
    )
}

export default MemoryBoard;