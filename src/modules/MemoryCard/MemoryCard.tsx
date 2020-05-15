import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as childImg from '../../sources/images/IMG-0053.jpg';
import { CardImage } from './MemoryCard.sc.js';
import { 
  Grid, 
  Card, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Button, 
  Typography 
} from '@material-ui/core/';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexShrink: 1,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardImage src={childImg.default} alt='child'></CardImage>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Zabawa na świeżym powietrzu
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Pomysły zabaw z dziećmi
            </Typography>
          </CardContent>
        </CardActionArea>
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