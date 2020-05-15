import React from 'react';
import * as childImg from '../../sources/images/IMG-0053.jpg';
import { CardImage } from './Card.sc.js';
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

export default function CardContentComponent(): JSX.Element {
  
    return (
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
    );
  }