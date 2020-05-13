import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainWrapper } from './modules/start-page/startPage.sc.js';
import { StartPage } from './modules/start-page/startPage';
import HomePage from './modules/home-page/HomePage';
import { StylesProvider } from '@material-ui/core/styles';

class App extends Component {
  render(): JSX.Element {
    return (
      <ApolloProvider client={apolloClient}>
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
      </ApolloProvider>      
    );
  }
}

export default App;