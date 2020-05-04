import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainWrapper } from './components/start-page/startPage.sc.js';
import { StartPage } from './components/start-page/startPage';
import { HomePage } from './components/home-page/HomePage';

class App extends Component {
  render(): JSX.Element {
    return (
      <div>
      <BrowserRouter>
        <MainWrapper>
          <Switch>
            <Route path='/dist' exact component={StartPage}></Route>
            <Route path='/home' component={HomePage}></Route>
          </Switch>
        </MainWrapper>      
      </BrowserRouter>        
      </div>
    );
  }
}

export default App;