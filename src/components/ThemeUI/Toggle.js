import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

const ToggleContainer = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  bottom: 0rem;
  z-index: 99;
  height: 3rem;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
  border-width: 0px 0px 2px;
  border-top-style: initial;
  border-right-style: initial;
  border-left-style: initial;
  border-image: initial;
  border-bottom-style: solid;
  font-weight: 200;
  color: rgb(255, 255, 255);
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  background-color: #faad5e;
  border-color: #344161;
  margin: 0 auto;
  width: 40px !important;
  height: 40px !important;
  bottom: 15px;
  left: 0.95rem;
  border-radius: 12px;
  button:focus {
    outline: 0;
  }

  svg {
    height: auto;
    overflow: initial;
    width: 1.3rem;
    align-self: center;
    transition: all 0.3s linear;
    stroke: #344161;
    fill: #344161;
    position: absolute;
    left: 0.6rem;
    top: 0.6rem;

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";

  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <FiSun />
      <FaRegMoon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
