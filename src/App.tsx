import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainWrapper } from './components/start-page/startPage.sc.js';
import { StartPage } from './components/start-page/startPage';
import { HomePage } from './components/home-page/HomePage';
import { StylesProvider } from '@material-ui/core/styles';

class App extends Component {
  render(): JSX.Element {
    return (
      <StylesProvider>
      <BrowserRouter>
        <MainWrapper>
          <Switch>
            <Route path='/home' exact component={StartPage}></Route>
            <Route path='/' exact component={HomePage}></Route>
          </Switch>
        </MainWrapper>      
      </BrowserRouter>        
      </StylesProvider>
    );
  }
}

export default App;