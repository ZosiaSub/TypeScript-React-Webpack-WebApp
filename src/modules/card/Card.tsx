import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  Card,  
  CardActions, 
  Button, 
} from '@material-ui/core/';
import CardContent from './CardContent';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexShrink: 1,
  },
  media: {
    height: 140,
  },
});

export default function CardComponent(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
        <CardContent />
        <CardActions>
          <Button size="small" color="primary">
            Udostępnij
          </Button>
          <Button size="small" color="primary">
            Więcej
          </Button>
        </CardActions>
      </Card>
    </Grid>    
  );
}