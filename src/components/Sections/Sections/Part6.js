import React from "react";
import styled from "styled-components";
import FallBack from "../../ThemeUI/FallBack";
import Image1 from "../../../images/coinmarketcap.webp";
import Image2 from "../../../images/coinmarketcap.jpg";
import Image3 from "../../../images/coingecko.webp";
import Image4 from "../../../images/coingecko.jpg";
import Image5 from "../../../images/hobit.webp";
import Image6 from "../../../images/hobit.jpg";
import Image7 from "../../../images/indoex.webp";
import Image8 from "../../../images/indoex.jpg";

const Wrapper = styled.section`
  box-sizing: content-box;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;
  padding-bottom: 80px;
  display: flex;

  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 0;
    padding-bottom: 1rem;
    justify-content: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 5.2rem;
  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 20px;
    grid-gap: 2rem;
    align-items: center;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 20px;
    grid-gap: 2rem;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    grid-gap: 2rem;
    align-items: center;
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
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  img {
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    @media (min-width: 481px) and (max-width: 767px) {
      width: 40%;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 40%;
    }
  }
  .padding {
    margin-bottom: 1.5rem;
  }

  .width {
    margin-left: auto;
    margin-right: auto;
    width: 55%;
    padding-top: 1rem;
    @media (min-width: 481px) and (max-width: 767px) {
      width: 40%;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 40%;
    }
  }
`;

const Part6 = () => {
  return (
    <Wrapper>
      <Grid>
        <Item>
          <FallBack
            src={Image1}
            alt="logo"
            className="logo"
            fallback={Image2}
          />
        </Item>

        <Item>
          <FallBack
            src={Image3}
            alt="logo"
            className="logo"
            fallback={Image4}
          />
        </Item>
        <Item>
          <FallBack
            src={Image5}
            alt="logo"
            className="width"
            fallback={Image6}
          />{" "}
        </Item>
        <Item>
          <FallBack
            src={Image7}
            alt="logo"
            className="width"
            fallback={Image8}
          />
        </Item>
      </Grid>
    </Wrapper>
  );
};

export default Part6;
