import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import styled from "styled-components";
import HomePage from "./components/HomePage";

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <HomePage />
      </Wrapper>
    </Provider>
  );
}

export default App;
