const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Image {
    data: String!,
    contentType: String!
  },
  input ImageInput {
    data: String!,
    contentType: String!
  }
  type Post {
    _id: ID,
    title: String,
    content: String,
    img: Image
  },
  type Query {
    posts: [Post]
  },
  type Mutation {
    addPost(title: String!, content: String!, img: ImageInput!): Post!,
  }
`;

module.exports = typeDefs;