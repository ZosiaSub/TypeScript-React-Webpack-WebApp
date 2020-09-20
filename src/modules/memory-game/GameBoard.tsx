import React, { useContext, memo } from 'react';
import { BoardWrapper, Board, MemoryImageBox, MemoryImage } from './GameBoard.sc.js';
import { prepareRandomCards } from '../../utils/memoryGameHelpers'

interface MemoryBoardProps {
    images: [
      
        {
            img: {
                contentType: string;
                data: string;
            },
            title: string;
            _id: string;
            src: string;
        }    
        
    ]
}
function MemoryBoard(props: MemoryBoardProps): 
JSX.Element {
    
    console.log('Board', props)

    const boardElements = prepareRandomCards(props.images);
    console.log(boardElements)

    return (
        <BoardWrapper>
            <Board>
                {boardElements.map(image => (
                    <MemoryImageBox key={image.newId}>
                        <MemoryImage
                            src={`data:${image.img.contentType};base64, ${image.img.data}`}
                            key={image.newId}
                        />
                    </MemoryImageBox>
                ))}
            </Board>
        </BoardWrapper>
    )
}

export default MemoryBoard;