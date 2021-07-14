import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Sections/Header/index";
import Part1 from "./components/Sections/Sections/Part1";
import Part2 from "./components/Sections/Sections/Part2";
import Part3 from "./components/Sections/Sections/Part3";
import Part4 from "./components/Sections/Sections/Part4";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
      </Layout>
    </div>
  );
}

export default App;
