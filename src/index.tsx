import React from 'react';
import ReactDOM from 'react-dom';

import { StartPage } from './components/start-page/startPage';

ReactDOM.render(
    <StartPage compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);
