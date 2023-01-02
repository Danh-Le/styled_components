import React from "react";
import styled from "styled-components";
import { navy } from "./styles/Colors";
import WorkDescription from "./components/WorkDescription";
import Title from "./components/Title";
import About from "./components/About";

const Background = styled.section`
  background-color: ${navy};
`;

const App = () => {
  return (
    <>
      <Background>
        <Title></Title>
        <About></About>
        <WorkDescription></WorkDescription>
      </Background>
    </>
  );
};

export default App;
