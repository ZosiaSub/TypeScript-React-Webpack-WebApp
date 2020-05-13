const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    _id: ID,
    title: String,
    content: String
  },
  type Query {
    posts: [Post]
  },
  type Mutation {
    addPost(title: String!, content: String!): Post!,
  }
`;

module.exports = typeDefs;