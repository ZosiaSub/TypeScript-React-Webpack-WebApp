import React from 'react';
import { MainWrapper, Logobox, Logo } from '../start-page/startPage.sc.js';
import * as logoSrc from '../../sources/images/logo_transparent.png';


export interface HomeProps { 
    compiler: string; 
    framework: string; 
}

export class HomePage extends React.Component<HomeProps, {}> {
    render(): JSX.Element {
        return (
            <MainWrapper>
                <Logobox>
                        <Logo src={logoSrc.default} alt='logo'></Logo>
                </Logobox>
            </MainWrapper>
        )      
        
    }
}