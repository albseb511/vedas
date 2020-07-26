import React from "react";
import NavBarWrapper from "./Components/NavBarWrapper";
import styled from "styled-components";
import "./styles.css";
import Content from "./Components/Content";
const Container = styled.div`
  padding: 0px;
  margin: 0px;
  background: #181818;
  width: 100%;
`;

export default function App() {
  return (
    <Container>
      <NavBarWrapper />
      <Content />
    </Container>
  );
}
