import React from 'react';
import { MainWrapper } from '../../modules/start-page/startPage.sc.js';
import AppBar from './AppBar';
import MediaCard from '../MemoryCard/MemoryCard';
import { HomeContainer, FlexContainer } from '../home-page/HomePage.sc.js';
import { Grid } from '@material-ui/core/';
import client from '../../config/createApolloClient.js';

class HomePage extends React.PureComponent<{}, {}> {
    render(): JSX.Element {
        return (
            <MainWrapper>
                <AppBar />
                <HomeContainer>
                    <Grid
                        container
                        spacing={3}
                        direction="row"
                        justify="center"
                    >
                        <MediaCard /> 
                        <MediaCard /> 
                        <MediaCard />        
                    </Grid>      
                </HomeContainer>                                            
            </MainWrapper>
        )      
        
    }
}

export default HomePage;