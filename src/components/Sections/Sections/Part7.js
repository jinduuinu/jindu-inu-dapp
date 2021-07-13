import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  box-sizing: content-box;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5rem;
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

const Part7 = () => {
  return (
    <Wrapper>
      <Grid>
        <Item>
          <Title>All your investments. All on Bitpanda.</Title>
          <Description>Cryptocurrencies</Description>
          <Text>
            Buy, sell and swap the cryptocurrencies you want anytime, anywhere.
          </Text>

          <Description>Cryptocurrencies</Description>
          <Text>
            Buy, sell and swap the cryptocurrencies you want anytime, anywhere.
          </Text>

          <Description>Cryptocurrencies</Description>
          <Text>
            Buy, sell and swap the cryptocurrencies you want anytime, anywhere.
          </Text>

          <Description>Cryptocurrencies</Description>
          <Text>
            Buy, sell and swap the cryptocurrencies you want anytime, anywhere.
          </Text>
        </Item>
      </Grid>
    </Wrapper>
  );
};

export default Part7;
