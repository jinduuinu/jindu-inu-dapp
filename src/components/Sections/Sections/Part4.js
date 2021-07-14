import React from "react";
import styled from "styled-components";

const Background = styled.div`
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 10%);
  height: 4.5rem;
`;
const Wrapper = styled.section`
  box-sizing: content-box;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5rem;
  text-align: center;
  padding-top: 1.75rem;
  font-family: "JinduInu2", sans-serif;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 13px;
  }
`;

const Part4 = () => {
  return (
    <Background className="footerBg">
      <Wrapper id="page6">
        <Grid className="footerColor">
          © 2021 by JINDO INU | team@jindoinu.info
        </Grid>
      </Wrapper>
    </Background>
  );
};

export default Part4;
