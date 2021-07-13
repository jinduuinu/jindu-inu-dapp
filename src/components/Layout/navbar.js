import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logo.webp";
import LogoJPG from "../../images/logo.jpg";
import ConnectImg from "../../images/left.svg";
import Button from "../ThemeUI/Button";
import FallBack from "../ThemeUI/FallBack";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  margin-right: 3.5rem;
  i.bx.bx-transfer {
    position: absolute;
    top: 272px;
    right: 225px;
    font-size: 20px;
    color: #000;
  }
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  width: -webkit-fill-available;
  height: 4.5rem;
  margin-left: 4.5rem;
  background: #fff;
  box-shadow: 0 10px 30px 0 rgb(0 0 0 / 10%);
`;

const FullWidth = styled.div`
  display: flex;
  margin: 16px 20px;

  .logo {
    width: 2.5rem;
    align-self: center;
  }
  .connecting {
    height: 2.5rem;
  }

  h2 {
    font-size: 15px;
    padding-left: 10px;
    align-self: center;
  }
  button {
    margin: 0 auto;
    margin-right: 1rem;
    right: 1rem;
  }

  .logoMain {
    @media (min-width: 320px) and (max-width: 480px) {
      display: none;
    }
  }
`;

function Navbar() {
  return (
    <Wrapper>
      <Nav className="navbar">
        <FullWidth>
          <FallBack
            src={LogoImg}
            alt="logo"
            className="logo"
            fallback={LogoJPG}
            alt="A photo showing the expiration date on a box of Lucky Charms"
          />

          <h2 className="logoMain">Jindu Inu</h2>
          <Button text="Connect" />
          <img src={ConnectImg} alt="login" className="connecting"></img>
        </FullWidth>
      </Nav>
    </Wrapper>
  );
}

export default Navbar;
