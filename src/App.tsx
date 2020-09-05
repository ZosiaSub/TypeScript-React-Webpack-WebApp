import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainWrapper } from './modules/start-page/startPage.sc.js';
import { StartPage } from './modules/start-page/startPage';
import HomePage from './modules/home-page/HomePage';
import { StylesProvider } from '@material-ui/core/styles';
import MemoryGame from '../src/modules/memory-game/MemoryGame';

class App extends Component {
  render(): JSX.Element {
    return (
        <StylesProvider>
          <BrowserRouter>
            <MainWrapper>
              <Switch>
                <Route path='/home' exact component={StartPage}></Route>
                <Route path='/' exact component={HomePage}></Route>
                <Route path='/memoryGame' exact component={MemoryGame}></Route>
              </Switch>
            </MainWrapper>      
          </BrowserRouter>        
        </StylesProvider>  
    );
  }
}

export default App;