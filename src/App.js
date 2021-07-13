import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Sections/Header/index";
import Part1 from "./components/Sections/Sections/Part1";
import Part5 from "./components/Sections/Sections/Part5";
import Part6 from "./components/Sections/Sections/Part6";
import Part9 from "./components/Sections//Sections/Part9";
import styled from "styled-components";

const Hr = styled.hr`
  overflow: visible;
  text-align: inherit;
  margin: 0 0 20px;
  border: 0;
  border-top: 1px solid #e1e3e6;
`;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Part1 />
        <Part5 />
        <Part6 />
        <Part9 />
      </Layout>
    </div>
  );
}

export default App;
