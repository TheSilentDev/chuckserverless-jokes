const { gql } = require("apollo-server-lambda");

exports.typeDefs = gql`
  type Query {
    categories: [String]
    randomJoke(category: String): Joke
  }
  
  type Joke {
    created_at,
    icon_url,
    id,
    updated_at,
    url,
    value
  }
`;
