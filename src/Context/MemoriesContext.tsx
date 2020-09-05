import React, { createContext } from 'react';



interface Car {
    _id: string;
    title: string;
    img: {
        data: string;
        constentType: string;
    };
}

interface FarmCars {
    farmCars: {
        data: [Car];
        loading: boolean;
        error: any;
    }
}
const MemoriesContext = createContext<FarmCars|any>({});


export default MemoriesContext;