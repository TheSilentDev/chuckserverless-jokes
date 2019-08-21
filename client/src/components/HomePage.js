import React from "react";
import styled from "styled-components";
import Chuck from "../Chuck.png";
import CategoryList from "./CategoryList";
import Joke from "./Joke";

const Container = styled.div`
  width: 90%;
  min-height: 80vh;
  margin: 10px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 100px;
  height: 150px;
  margin: 0 auto;
`;

function HomePage() {
  return (
    <Container>
      <Image src={Chuck} />
      <Joke />
      <CategoryList />
    </Container>
  );
}

export default HomePage;
