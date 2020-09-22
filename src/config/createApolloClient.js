import { ApolloClient } from 'apollo-client';
import { InMemoryCache} from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:3000/graphql'
})


const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
  fetchOptions: { mode: 'no-cors' }
});

export default client;
