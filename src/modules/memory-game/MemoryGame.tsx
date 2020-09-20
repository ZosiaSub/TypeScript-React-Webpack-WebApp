import React from 'react';
import { MainWrapper } from '../start-page/startPage.sc.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MemoryBoard from './GameBoard';
import { Link } from 'react-router-dom';

interface Car {
    img: {
        contentType: string;
        data: string;
    };
    title: string;
    _id: string;
    src: string;
}


interface GameProps {
    location: {
        state: {
            cars: [Car];
        }
    }         
}


function MemoryGame(props: GameProps) :JSX.Element {
    return (
        <MainWrapper>
            <Link to='/' params={{ data: 'test coś tam'}}>
                <ArrowBackIosIcon 
                    color="secondary"
                    style={{ fontSize: 40 }}
                />
            </Link>
            <MemoryBoard images={props.location.state.cars}/>
        </MainWrapper>
    )
}
export default MemoryGame;