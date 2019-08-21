import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const JokeText = styled.h2`
  color: #000;
  font-family: "Open Sans", sans-serif;
`;

function Joke(props) {
  console.log(props.joke);
  return <JokeText>{props.joke}</JokeText>;
}

const mapStateToProps = state => ({
  joke: state.joke.joke
});

export default connect(
  mapStateToProps,
  null
)(Joke);
