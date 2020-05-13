import ApolloClient from 'apollo-boost';
import { DB_URI } from '../consts';

const client = new ApolloClient({
  uri: DB_URI
});

export default client;