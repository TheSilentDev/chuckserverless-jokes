const { ApolloServer } = require("apollo-server-lambda");
const ChuckNorrisAPI = require("./datasources/chuckNorrisDataSource");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      chuckNorrisAPI: new ChuckNorrisAPI()
    };
  }
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});
