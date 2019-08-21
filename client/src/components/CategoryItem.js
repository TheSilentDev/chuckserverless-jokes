import React from "react";
import styled from "styled-components";
import { getRandomJoke } from "../store/actions/jokeActions";
import { connect } from "react-redux";

const Item = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  background: #673ab7;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
`;

function CategoryItem(props) {
  const getJoke = category => {
    console.log(props);
    props.getRandomJoke(category);
  };

  return <Item onClick={() => getJoke(props.name)}>{props.name}</Item>;
}

const mapDispatchToProps = {
  getRandomJoke
};

export default connect(
  null,
  mapDispatchToProps
)(CategoryItem);
