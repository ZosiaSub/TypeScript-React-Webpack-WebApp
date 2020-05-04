import React from 'react';
import { Header, Logobox, Logo, StartButton, StartText, StartTextBox, MainBox, MainWrapper } from './startPage.sc.js';
import * as logoSrc from '../../sources/images/logo_transparent.png';
import { Link } from 'react-router-dom';


export interface StartProps { 
    compiler: string; 
    framework: string; 
}

// 'StartProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class StartPage extends React.Component<StartProps, {}> {
    render(): JSX.Element {
        return (
            <MainWrapper>
                <Logobox>
                        <Logo src={logoSrc.default} alt='logo'></Logo>
                </Logobox>
                <Header>
                    <MainBox>
                        <StartTextBox>
                            <StartText>WITAJ</StartText>
                        </StartTextBox>
                        <Link to='/home'>
                            <StartButton onClick={() => alert('DUPA')}>START</StartButton>
                        </Link>
                        
                    </MainBox>
                </Header>
            </MainWrapper>
        )      
        
    }
}