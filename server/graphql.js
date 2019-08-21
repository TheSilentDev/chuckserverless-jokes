const { ApolloServer, gql } = require("apollo-server-lambda");
const ChuckNorrisAPI = require("./datasources/chuckNorrisDataSource");

const typeDefs = gql`
  type Query {
    randomJoke(category: String): Joke
    categories: [String]
  }

  type Joke {
    categories: [String]
    created_at: String
    icon_url: String
    id: String
    updated_at: String
    url: String
    value: String
  }
`;

const resolvers = {
  Query: {
    randomJoke: async (_source, { category }, { dataSources }) => {
      const results = await dataSources.chuckNorrisAPI.getJokeByCategory(
        category
      );
      console.log(results);
      return results;
    },
    categories: async (_source, _args, { dataSources }) => {
      const results = await dataSources.chuckNorrisAPI.getCategories();
      console.log(results);
      return results;
    }
  }
};

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
