import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  ul {
    position: relative;
    list-style: none;
    display: flex;
    place-content: center;
    padding-inline-start: 0;
  }
  li {
    margin-left: 60px;
  }

  a.NLink {
    color: #000;
    font-size: 14px;
    letter-spacing: 0.1rem;
    text-decoration: unset;
    &:hover {
      color: blue;
    }
  }
`;

const Links = ({ styleClass }) => {
  return (
    <Wrapper>
      <ul className={styleClass}>
        <li>
          <a href="#" className="NLink">
            Home
          </a>
        </li>
        <li>
          <a href="/token" className="NLink">
            Token
          </a>
        </li>
        <li>
          <a href="/contribute" className="NLink">
            Roadmap
          </a>
        </li>
        <li>
          <a href="/contact" className="NLink">
            Features
          </a>
        </li>
        <li>
          <a href="/contact" className="NLink">
            How To Buy
          </a>
        </li>
        <li>
          <a href="/contact" className="NLink">
            FAQ
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Links;
