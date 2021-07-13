import React from "react";
import styled from "styled-components";
import Bg from "../../../images/bgpart1.svg";

const Background = styled.div`
  background: url(${Bg}) no-repeat center;
  background-size: cover;
  @media (min-width: 320px) and (max-width: 480px) {
    background: none;
  }
`;
const Wrapper = styled.section`
  box-sizing: content-box;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 10rem;
  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 0px !important;
    padding-bottom: 0;
    grid-row-gap: 0rem;
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
`;

const GridTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
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

  i {
    position: relative;
    top: calc(50% - 20px);
    font-size: 40px;
    align-self: center;
    text-align: center;
  }
`;

const Text = styled.li`
  line-height: 1.5;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.7);
  font-family: "JinduInu2", sans-serif;
  margin-bottom: 1.5rem;
  list-style: none;
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
`;

const Part5 = () => {
  return (
    <Background>
      <Wrapper>
        <Grid>
          <Item>
            <Link className="linkcolor" href="/">
              Phase 1
            </Link>
            <Text>NEW Token Generation</Text>
            <Text>
              Disclosure of own token migration site, (site providing 1:1 ratio
              token swap)
            </Text>
            <Text>Token Migration Ads ,AMA ( OUR Main chat room)</Text>
            <Text>Migration consultation and progress with exchanges</Text>
          </Item>

          <Item>
            <Link className="linkcolor" href="/">
              Phase 2
            </Link>
            <Text>
              CMC,CG Request for information change (It may take a few days)
            </Text>
            <Text>
              Change WEBSITE , WHITEPAPER , various information , etcetc{" "}
            </Text>
            <Text>Swap stop replacing old jind with new jind.</Text>
          </Item>

          <Item>
            <Link className="linkcolor" href="/">
              Phase 3
            </Link>
            <Text>
              Before we sell the old jind we have collected, we record the
              number of jind and bnb in the current pool.
            </Text>
            <Text>Selling the old jind we collected.</Text>
            <Text>
              Provides new jind liquidity.(We put in as many new jind and bnb as
              we recorded.)
            </Text>
            <Text>Start trading on Pancake Swap and several exchanges</Text>
          </Item>
        </Grid>

        <GridTwo>
          <Item>
            <Circle>
              <i class="bx bxs-planet"></i>{" "}
            </Circle>
            <Text>
              If you do not swap before phase 3, you cannot swap in the future.
            </Text>
          </Item>
          <Item>
            <Circle>
              <i class="bx bxs-planet"></i>{" "}
            </Circle>
            <Text>
              Since we can't subtract all the bnb from the old jind pool, the
              new jind price may be a little lower in the beginning. But don't
              worry, the 5% auto LP function will bring it back to normal.
            </Text>
          </Item>
          <Item>
            <Circle>
              <i class="bx bxs-planet"></i>{" "}
            </Circle>
            <Text>
              If you buy an old jind after phase3, we can't do a swap. please be
              careful.
            </Text>
          </Item>
          <Item>
            <Circle>
              <i class="bx bxs-planet"></i>{" "}
            </Circle>
            <Text>
              We cannot reward holders who have not migrated, so please make
              sure to swap tokens within the specified period.
            </Text>
          </Item>
        </GridTwo>
      </Wrapper>
    </Background>
  );
};

export default Part5;
