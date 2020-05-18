import React, { useState } from 'react';
import { MainWrapper } from '../../modules/start-page/startPage.sc.js';
import AppBar from './AppBar';
import Card from '../card/Card';
import { HomeContainer } from '../home-page/HomePage.sc.js';
import { Grid, CircularProgress } from '@material-ui/core/';
import client from '../../config/createApolloClient.js';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

const GET_POSTS = gql`
  {
    posts {
      _id
      title
      content
      img {
        data
        contentType
      }
    }
  }
`

function HomePage(): JSX.Element {
    const [cardData, setCardData] = useState('');
    const { loading, error, data } = useQuery(GET_POSTS);
   
    const cards = () => {
        // if (error) return <ErrorMessage />;
        if (data.posts) {
            console.log(data.posts)
            return (
                data.posts.map(post => (
                    <Card cardData={post} key={post._id}/>
                ))
            )
        }
    }

    const content = loading ? (<CircularProgress />) : cards();

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
                        {content}     
                    </Grid>      
                </HomeContainer>                   
            </MainWrapper>       
        )       
}

export default HomePage;