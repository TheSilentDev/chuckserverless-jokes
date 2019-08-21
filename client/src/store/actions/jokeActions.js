import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { GET_JOKE } from "./types";

const client = new ApolloClient({
  uri: "https://acdjtydh6j.execute-api.us-east-1.amazonaws.com/dev/graphql"
});

export const getRandomJoke = category => async dispatch => {
  let response = await client.query({
    query: gql`
      {
        randomJoke(category: "${category}") {
          value
        }
      }
    `
  });

  response = response.data.randomJoke.value;

  dispatch({
    type: GET_JOKE,
    payload: response
  });
};
