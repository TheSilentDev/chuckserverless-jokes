// graphql.js

const { ApolloServer, gql } = require("apollo-server-lambda");
const typeDefs = require("./typeDefs");

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();
