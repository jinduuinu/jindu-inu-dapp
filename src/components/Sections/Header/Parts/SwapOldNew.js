import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../ThemeUI/Button";
import Dog from "../../../../images/dog.webp";
import { ReactComponent as XSVG } from "../../../../images/x.svg";

const Wrapper = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const ButtonUp = styled.button`
  display: block;
  background: #fff;
  width: 100%;
  height: 450px;
  position: relative;
  text-align: left;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  padding: 20px;
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 10%);
  @media (min-width: 320px) and (max-width: 480px) {
    height: 400px;
  }

  h3.number {
    position: absolute;
    bottom: 11.9rem;
    left: 2rem;
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
  }

  p.nameTok {
    position: absolute;
    top: 11.5rem;
    font-size: 12px;
    @media (min-width: 320px) and (max-width: 480px) {
      position: absolute;
      top: 10.6rem;
      left: 2rem;
      font-size: 12px;
    }
  }

  p.nameTok2 {
    position: absolute;
    top: 17.6rem;
    font-size: 12px;
    @media (min-width: 320px) and (max-width: 480px) {
      position: absolute;
      top: 16.7rem;
      font-size: 12px;
      left: 2rem;
    }
  }

  h3.number2 {
    position: absolute;
    bottom: 5.7rem;
    left: 2rem;
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
  }
  h3 {
    margin-bottom: 1rem;
    font-family: "JinduInu2", sans-serif;
    color: #344161;
    @media (min-width: 320px) and (max-width: 480px) {
      margin-bottom: 2rem;
    }
  }

  .inPut {
    height: 50px;
    background: #fcd7b3;
    border-radius: 5px;
    margin-bottom: 3rem;
    border-top-style: initial;
    border-right-style: initial;
    border-left-style: initial;
    border-image: initial;
    border-bottom-style: solid !important;
    border-width: 0px 0px 2px !important;
    cursor: pointer;
    border-color: #66362e !important;
  }

  .swapForm {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
  }

  .inPutTwo {
    height: 50px;
    background: #fcd7b3;
    border-radius: 5px;
    margin-bottom: 2rem;
    border-top-style: initial;
    border-right-style: initial;
    border-left-style: initial;
    border-image: initial;
    border-bottom-style: solid !important;
    border-width: 0px 0px 2px !important;
    cursor: pointer;
    border-color: #66362e !important;
  }
  input {
    width: inherit;
    height: inherit;
    border: none;
    padding: 0px 12px;
    background: transparent;
  }
  .xBtn {
    height: 20px;
    width: 20px;
    border-radius: 5px;
    background: #faad5e;
    color: #fff;
    border: #344161;
    border-top-style: initial;
    border-right-style: initial;
    border-left-style: initial;
    border-image: initial;
    border-bottom-style: solid !important;
  }
  .btnX {
    margin-bottom: 1.5rem;
    fill: #344161;
    padding: 3px;
  }

  .dog {
    position: absolute;
  }
  p {
    margin-bottom: 3rem;
    color: #344161;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.5;
    font-family: "JinduInu2", sans-serif;
  }

  .dogImg {
    height: 150px;
    top: -8rem;
    right: -25rem;
    position: absolute;
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
  }

  .bx-transfer {
    @media (min-width: 320px) and (max-width: 480px) {
      bottom: 10.2rem;
      left: 120px;
    }
  }

  i {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 10rem;
    left: 225px;
  }
  .descriptionSwap {
    color: #344161 !important;

    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
  }
`;

const SwapOldNew = () => {
  const [hide, setHide] = useState(true);
  return (
    <Wrapper>
      {hide ? (
        <ButtonUp>
          <div className="dog">
            <img src={Dog} className="dogImg" alt="#" />
          </div>
          <XSVG className="btnX xBtn" onClick={() => setHide(false)}></XSVG>
          <h3>Swap old for new and earn BNB!</h3>
          <p className="descriptionSwap">
            Swap your old coins for new ones and receive them direct in your
            trust wallet in a matter of seconds.
          </p>
          <p className="nameTok">Old Jindu Inu:</p>
          <p className="nameTok2">New Jindu Inu:</p>
          <i class="bx bx-transfer"></i>{" "}
          <div className="swapForm">
            <div className="inputGrid">
              <div className="inPut">
                <div>
                  <div>
                    <h3 className="number">0,000</h3>
                    <input></input>
                  </div>
                </div>
              </div>

              <div className="inPutTwo">
                <div>
                  <div>
                    <h3 className="number2">0,000</h3>
                    <input></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button text="Swap now" />
        </ButtonUp>
      ) : null}
    </Wrapper>
  );
};

export default SwapOldNew;
