import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Sections/Header/index";
import Part1 from "./components/Sections/Sections/Part1";
import Part5 from "./components/Sections/Sections/Part5";
import Part6 from "./components/Sections/Sections/Part6";
import Part9 from "./components/Sections//Sections/Part9";

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
