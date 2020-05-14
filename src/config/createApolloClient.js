import { ApolloClient } from 'apollo-client';
import { InMemoryCache} from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:3000/graphql'
})
console.log('URI', link)

const client = new ApolloClient({
  link,
  cache
});

const query = gql`
  {
    posts {
      title,
      content,
    }
  }
`
client.query({query})
  .then(result => console.log('DUPA', result))

export default client;