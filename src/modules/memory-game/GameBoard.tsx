import React, { useState } from 'react';
import { BoardWrapper, Board, MemoryImageBox, MemoryImage } from './GameBoard.sc.js';
import { prepareRandomCards, checkIfPair } from '../../utils/memoryGameHelpers'
import { createGlobalStyle } from 'styled-components';

interface Image {
    img: {
        contentType: string;
        data: string;
    },
    title: string;
    _id: string;
    src: string;
}  

interface CardImage {
    img: {
        contentType: string;
        data: string;
    },
    _id: string;
    src: string;
    newId: string;
}

interface MemoryBoardProps {
    images: [Image];
}

  
function MemoryBoard(props: MemoryBoardProps): 
JSX.Element {
    const boardElements: CardImage[] = prepareRandomCards(props.images);
    console.log("PROPS  ,", props.images)
    const [cards, setCards] = useState(boardElements);
    const [selectedCards, setSelectedCards] = useState<string[]>([]);
    const [pairs, setPairs] = useState<string[]>([]);

    const clearSelectedCards = () => setTimeout(() =>{
        console.log(3333333333)
        setSelectedCards([]);
    }, 1000)

    const onClickHandler = (event: { target: { id: string } }) => {
        const card: string = event.target.id;
        if (selectedCards.includes(card)) return;
        if(selectedCards.length === 2) return;
        const updatedCards = [...selectedCards, card];
        setSelectedCards(updatedCards);
        if(selectedCards.length === 1) {
            const isAPair = checkIfPair(updatedCards);
            if (isAPair) {
                setTimeout(() => {
                      setPairs(pairs.concat(updatedCards));setSelectedCards([]);
                }, 500);
            } 
            !isAPair && clearSelectedCards();
        }

    }
console.log(1111111111, selectedCards);


    return (
        <BoardWrapper>
            <Board>
                {cards.map(image => (
                    <MemoryImageBox key={image.newId} isAPair={pairs.includes(image.newId)}>
                        <MemoryImage
                            src={`data:${image.img.contentType};base64, ${image.img.data}`}
                            key={image.newId}
                            id={image.newId}
                            onClick={onClickHandler}
                            isSelected={selectedCards.includes(image.newId)}
                        />
                    </MemoryImageBox>
                ))}
            </Board>
        </BoardWrapper>
    )
}

export default MemoryBoard;