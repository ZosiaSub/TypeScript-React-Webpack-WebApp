import React, { useState } from 'react';
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

interface CardProps { 
  cardData: {
    _id: string;
    title: string;
    content: string;
    img: {
      data: string;
      constentType: string;
    };
  };
}

export default function CardContentComponent(props: CardProps): JSX.Element {
    const imageString = props.cardData.img.data;
    const imgType = props.cardData.img.constentType;
    const imgUrl = `data:${imgType};base64, ${imageString}`
    return (
          <CardActionArea>
            <CardImage src={imgUrl} alt='traktor'></CardImage>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.cardData.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.cardData.content}
              </Typography>
            </CardContent>
          </CardActionArea> 
    );
  }