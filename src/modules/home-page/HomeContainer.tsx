import React, { useContext } from 'react';
import { HomeContainerStyled } from '../home-page/HomePage.sc.js';
import { Grid, CircularProgress } from '@material-ui/core/';
import MemoriesContext from '../../Context/MemoriesContext';
import Card from '../card/Card';

interface Car {
    _id: string;
    title: string;
    img: {
        data: string;
        constentType: string;
    };
}

 function HomeContainer() :JSX.Element {
    const carsData = useContext(MemoriesContext);
    const { loading, data } = carsData.farmCars;
    
    const generateStartCard = () => {
        const car = data && data[0];
        return (
            <Card cardData={car} key={car._id} />
        )
    }

   
    const content = loading ? <CircularProgress /> : generateStartCard();
    
    return (
       <HomeContainerStyled>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center"
            >
            {content}   
        </Grid>      
    </HomeContainerStyled>   
    )
} 

export default HomeContainer;