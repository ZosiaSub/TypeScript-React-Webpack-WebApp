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

    console.log(data)
    const cards = () => {
        if (data && data.length) {
            return (
                data.map((car: Car) => (
                    <Card cardData={car} key={car._id} />
                ))
            )
        }
    }
   
    const content = loading ? <CircularProgress /> : cards();
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