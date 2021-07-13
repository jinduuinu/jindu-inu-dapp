import React from "react";
import styled from "styled-components";
import Bg from "../../../images/part3.svg";

const Wrapper = styled.section`
  box-sizing: content-box;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  background: url(${Bg}) no-repeat center;
  background-size: cover;
  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 0rem !important;
    padding-top: 2rem !important;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding-bottom: 0rem !important;
    padding-top: 110px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 0rem !important;
    padding-top: 2rem !important;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }
`;

const Item = styled.div`
  align-items: start;
  justify-items: start;
  background: #fff;
  display: grid;
  padding: 20px;
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 10%);
  border-radius: 10px;
  .padding {
    margin-bottom: 1.5rem;
  }
`;

const Circle = styled.div`
  height: 70px;
  width: 70px;
  background-color: #faad5d;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 1.5rem;
  text-align-last: center;

  @media (min-width: 320px) and (max-width: 480px) {
    justify-self: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    justify-self: center;
  }

  i {
    position: relative;
    top: calc(50% - 20px);
    font-size: 40px;
    align-self: center;
    text-align: center;
    place-self: center;
    @media (min-width: 320px) and (max-width: 480px) {
      align-self: center;
      text-align: center;
      place-self: center;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      align-self: center;
      text-align: center;
      place-self: center;
    }
  }
`;

const Text = styled.p`
  line-height: 1.5;
  font-size: 17px;
  font-family: "JinduInu2", sans-serif;
  margin-bottom: 1.5rem;
  @media (min-width: 320px) and (max-width: 480px) {
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
  }
`;

const Link = styled.a`
  line-height: 1.5;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  font-family: "JinduInu2", sans-serif;
  margin-bottom: 1.5rem;
  text-decoration: unset;
  background-image: linear-gradient(#faad5d, #faad5d),
    linear-gradient(#fff, #fff), linear-gradient(#faad5d, #faad5d);
  background-size: 100% 1px, 0 1px, 0 1px;
  background-position: 0 100%, 0 100%, 0 100%;
  background-repeat: no-repeat;
  @media (min-width: 320px) and (max-width: 480px) {
    justify-self: center;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    justify-self: center;
  }
`;

const Part1 = () => {
  return (
    <Wrapper>
      <Grid>
        <Item>
          <Circle>
            <i class="bx bxs-pie-chart-alt-2"></i>{" "}
          </Circle>
          <Link className="linkcolor" href="/">
            Liquidity Pool
          </Link>
          <Text className="linkcolor">
            5% of the total supply added to the liquidity pool.
          </Text>
        </Item>

        <Item>
          <Circle>
            <i class="bx bxs-donate-heart"></i>{" "}
          </Circle>
          <Link className="linkcolor" href="/">
            Reward to holders
          </Link>
          <Text className="linkcolor">
            Another 5% goes to the holders as reward.
          </Text>
        </Item>

        <Item>
          <Circle>
            <i class="bx bx-sitemap"></i>{" "}
          </Circle>
          <Link className="linkcolor" href="/">
            Marketing wallet
          </Link>
          <Text className="linkcolor">
            Our marketing wallet receives 1% from each transaction.
          </Text>
        </Item>
      </Grid>
    </Wrapper>
  );
};

export default Part1;
