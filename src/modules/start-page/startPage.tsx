import React from 'react';
import { Header, Logobox, Logo, StartButton, StartText, StartTextBox, MainBox, MainWrapper } from './startPage.sc.js';
import Constants from '../../sources/constants';


export interface StartProps { 
    compiler: string; 
    framework: string; 
}

export class StartPage extends React.Component<StartProps, {}> {
    render(): JSX.Element {
        return (
            <MainWrapper>
                <Logobox>
                        <Logo src={Constants.images.logo} alt='logo'></Logo>
                </Logobox>
                <Header>
                    <MainBox>
                        <StartTextBox>
                            <StartText>WITAJ</StartText>
                        </StartTextBox>
                            <StartButton to='/home'>START</StartButton>
                    </MainBox>
                </Header>
            </MainWrapper>
        )      
        
    }
}