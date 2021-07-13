import React from "react";
import styled from "styled-components";
import Image1 from "../../../images/coinmarketcap.webp";
import Image2 from "../../../images/coingecko.webp";
import Image3 from "../../../images/hobit.webp";
import Image4 from "../../../images/indoex.webp";

const Wrapper = styled.section`
  box-sizing: content-box;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;
  padding-bottom: 80px;
  display: flex;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 5.2rem;
  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const Item = styled.div`
  align-items: start;
  justify-items: start;
  padding: 20px;
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 10%);
  width: 200px;
  height: 100px;
  border-radius: 10px;
  display: block;
  text-align-last: center;
  background: #fff;
  img {
    width: 150px;
  }
  .padding {
    margin-bottom: 1.5rem;
  }

  .width {
    width: 100px;
  }
`;

const Circle = styled.div`
  height: 70px;
  width: 70px;
  background-color: #fad5b1;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 1.5rem;
  text-align-last: center;

  i {
    position: relative;
    top: calc(50% - 20px);
    font-size: 40px;
  }
`;

const Text = styled.p`
  line-height: 1.5;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.7);
  font-family: "JinduInu2", sans-serif;
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  line-height: 1.5;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.7);
  font-family: "JinduInu2", sans-serif;
  margin-bottom: 1.5rem;
  text-decoration: unset;
  background-image: linear-gradient(#faad5d, #faad5d),
    linear-gradient(#fff, #fff), linear-gradient(#faad5d, #faad5d);
  background-size: 100% 1px, 0 1px, 0 1px;
  background-position: 0 100%, 0 100%, 0 100%;
  background-repeat: no-repeat;
`;

const Part6 = () => {
  return (
    <Wrapper>
      <Grid>
        <Item>
          <img src={Image1} />
        </Item>

        <Item>
          <img src={Image2} />
        </Item>
        <Item>
          <img className="width" src={Image3} />
        </Item>
        <Item>
          <img className="width" src={Image4} />
        </Item>
      </Grid>
    </Wrapper>
  );
};

export default Part6;
