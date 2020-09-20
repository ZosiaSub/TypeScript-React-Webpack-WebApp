import React from 'react';
import { MainWrapper } from '../../modules/start-page/startPage.sc.js';
import AppBar from './AppBar';
import Card from '../card/Card';
import client from '../../config/createApolloClient.js';
import MemoriesContext from '../../Context/MemoriesContext';
import HomeContainer from './HomeContainer';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_POSTS } from '../../GraphQl/memories';

interface Car {
    _id: string;
    title: string;
    img: {
        data: string;
        constentType: string;
    };
}

function HomePage(): JSX.Element {   
    const { loading, error, data } = useQuery(GET_POSTS);
    const cars: [Car] = data ? data.posts : [];
    const memoriesValue = {
        farmCars:  {
            data: cars,
            loading,
            error        
        }
    };

    return (
     <MainWrapper>
         <MemoriesContext.Provider value={memoriesValue}>
             <AppBar />
             <HomeContainer />     
        </MemoriesContext.Provider>  
    </MainWrapper>       
    )       
}

export default HomePage;