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
import "../../../App.css";
const Wrapper = styled.section`
  box-sizing: content-box;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;
  padding-bottom: 80px;
  place-content: center;
  text-align: left;
  display: flex;
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 10%);
  border-radius: 10px;
  background: #fff;
  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 0;
    padding-bottom: 1rem;
    justify-content: center;
    margin: 20px;
    padding: 20px;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0rem;
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

const Part5 = () => {
  return (
    <Wrapper id="page5">
      <div>
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="country">Message</label>
          <textarea id="w3review" name="w3review">
            At w3schools.com you will learn how to make a website. They offer
            free tutorials in all web development technologies.
          </textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </Wrapper>
  );
};

export default Part5;
