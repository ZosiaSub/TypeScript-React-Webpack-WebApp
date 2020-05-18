// eslint-disable-next-line node/no-unsupported-features/es-syntax
export interface CardProps { 
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
