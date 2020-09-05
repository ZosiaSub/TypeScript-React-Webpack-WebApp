const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('./config/database');
const typeDefs = require('./modules/post/graphglSchema');
const resolvers = require('./modules/post/resolvers');
const cors = require('cors');

// #5 Initialize an Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// #6 Initialize an Express application
const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
  credentials: true
};

app.use(cors(corsOptions));

// #7 Use the Express application as middleware in Apollo server
server.applyMiddleware({ app });
console.log('INNNN')

// #8 Set the port that the Express application will listen to
app.listen({ port: 3000 }, () => {
  console.log(`Server running on http://localhost:3000${server.graphqlPath}`);
});