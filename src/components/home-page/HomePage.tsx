import React from 'react';
import { MainWrapper } from '../start-page/startPage.sc.js';
import AppBar from './AppBar';

export class HomePage extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <MainWrapper>
                <AppBar />
            </MainWrapper>
        )      
        
    }
}