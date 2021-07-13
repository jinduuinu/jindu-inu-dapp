import React from "react";
import styled from "styled-components";

import Navbar from "./navbar";
import Footer from "./footer";
import LeftBar from "./LeftNav/LeftBar";

const Wrapper = styled.div`
  margin-left: 4.5rem;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <LeftBar />
      <Footer />
    </Wrapper>
  );
};

export default Layout;
