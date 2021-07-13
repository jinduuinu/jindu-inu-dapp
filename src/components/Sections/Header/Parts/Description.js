import React from "react";
import styled from "styled-components";
import Button from "../../../ThemeUI/Button";

const Info = styled.div`
  font-family: "JinduInu2", sans-serif;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 55px;
  margin: 0 0 1.5rem;
  line-height: 1.1;
  display: block;
  margin-block-end: 0.5em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 30px;
    padding-top: 1.5rem;
  }
`;

const TagLine = styled.span`
  color: #313131 !important;
  margin: 0 0 1.5rem;
  line-height: 1.1;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  font-size: 14px;
`;

const Text = styled.p`
  color: rgba(0, 0, 0, 0.7);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-family: "JinduInu2", sans-serif;
`;

const Underline = styled.i`
  color: rgba(0, 0, 0, 0.7);
  font-style: unset;
  text-decoration: unset;
  background-image: linear-gradient(#faad5d, #faad5d),
    linear-gradient(#fff, #fff), linear-gradient(#faad5d, #faad5d);
  background-size: 100% 1px, 0 1px, 0 1px;
  background-position: 0 100%, 0 100%, 0 100%;
  background-repeat: no-repeat;
`;

const Description = () => {
  return (
    <Info>
      <TagLine className="tagline">CRYPTO · BSC · BENEFITS</TagLine>
      <Title>Invest in what you believe in</Title>
      <Text>
        Explore our new Jindu Inu $JIND{" "}
        <Underline className="underline">hyper deflationary token</Underline>{" "}
        with extra benefits to holder.
      </Text>
      <Button text="Get started" />
    </Info>
  );
};

export default Description;
