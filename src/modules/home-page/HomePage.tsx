import React from 'react';
import { MainWrapper } from '../../modules/start-page/startPage.sc.js';
import AppBar from './AppBar';
import client from '../../config/createApolloClient.js';

class HomePage extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <MainWrapper>
                <AppBar />
            </MainWrapper>
        )      
        
    }
}

export default HomePage;