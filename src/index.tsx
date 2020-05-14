import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './config/createApolloClient.js';
import App from './App';
import theme from './theme';

const Root = () => (
   <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
   </ThemeProvider>
   </ApolloProvider>  
)

ReactDOM.render(<Root />, document.getElementById("root"));
