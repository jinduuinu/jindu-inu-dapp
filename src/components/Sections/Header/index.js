import React from "react";
import styled from "styled-components";
import Description from "./Parts/Description";
import SwapOldNew from "./Parts/SwapOldNew";
import Bg from "../../../images/InuB.svg";

const BgMain = styled.div`
  background: url(${Bg}) no-repeat center;
  background-size: cover;
`;

const Wrapper = styled.section`
  box-sizing: content-box;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 100vh;
`;

const Height = styled.div`
  padding-top: 125px;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Header = () => {
  return (
    <BgMain className="backgroundColor">
      <Wrapper>
        <Height>
          <Description />
          <SwapOldNew />
        </Height>
      </Wrapper>
    </BgMain>
  );
};

export default Header;
