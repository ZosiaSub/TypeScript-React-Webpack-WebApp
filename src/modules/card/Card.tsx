import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  Card,  
  CardActions, 
  Button, 
} from '@material-ui/core/';
import CardContent from './CardContent';
import { Link } from 'react-router-dom';
import MemoriesContext from '../../Context/MemoriesContext';

interface CardProps {
  key: string; 
  cardData: {
    _id: string;
    title: string;
    img: {
      data: string;
      constentType: string;
    };
  };
}


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexShrink: 1,
  },
  media: {
    height: 140,
  },
});

export default function CardComponent(props: CardProps): JSX.Element {
  const classes = useStyles();
  const farmCarsData = useContext(MemoriesContext);
  const farmCars = farmCarsData.data;

  return (
    <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
        <CardContent cardData={props.cardData} />
        <CardActions>
          <Button size="small" color="primary">
            Udostępnij
          </Button>
          <Link to={{
              pathname: '/memoryGame',
              state: {
                cars: farmCars
              }
              }} >
            <Button size="small" color="primary">
            Zagraj
            </Button> 
          </Link>
        </CardActions>
      </Card>
    </Grid>    
  );
}