import React from 'react';
import { MainWrapper } from '../start-page/startPage.sc.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MemoryBoard from './GameBoard';
import { Link } from 'react-router-dom';

interface GameProps {
    location:{
        state: {
            cars: {
                data: [
                    {
                        img: {
                            contentType: string,
                            data: string,
                        },
                        title: string,
                    }
                ]
            }
        }
    }         
}

function MemoryGame(props: GameProps) :JSX.Element {
    console.log(props)
    return (
        <MainWrapper>
            <Link to='/' params={{ data: 'test dupa'}}>
                <ArrowBackIosIcon 
                    color="secondary"
                    style={{ fontSize: 40 }}
                />
            </Link>
            <MemoryBoard images={props.location.state.cars.data}/>
        </MainWrapper>
    )
}
export default MemoryGame;