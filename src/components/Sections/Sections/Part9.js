import React from "react";
import styled from "styled-components";

const Background = styled.div`
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 10%);
  height: 4.5rem;
  background: #fff;
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
`;

const Item = styled.div``;

const Title = styled.h2`
  font-size: 42px;
  font-family: "JinduInu2", sans-serif;
  margin-bottom: 2rem;
`;

const Description = styled.span`
  text-decoration: unset;
  background-image: linear-gradient(#faad5d, #faad5d),
    linear-gradient(#fff, #fff), linear-gradient(#faad5d, #faad5d);
  background-size: 100% 1px, 0 1px, 0 1px;
  background-position: 0 100%, 0 100%, 0 100%;
  background-repeat: no-repeat;
  font-family: "JinduInu2", sans-serif;

  font-size: 19px;
`;

const Text = styled.p`
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-family: "JinduInu2", sans-serif;
`;

const Part9 = () => {
  return (
    <Background className="footerBg">
      <Wrapper>
        <Grid className="footerColor">
          © 2021 by JINDO INU | team@jindoinu.info
        </Grid>
      </Wrapper>
    </Background>
  );
};

export default Part9;
