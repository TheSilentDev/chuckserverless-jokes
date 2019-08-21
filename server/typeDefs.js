const { gql } = require("apollo-server-lambda");

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

module.exports = typeDefs;
