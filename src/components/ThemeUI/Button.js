import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: #faad5e;
  border-radius: 30px;
  border-width: 0px 0px 2px !important;
  border: solid #344161;
  width: 9rem;
  height: 2.5rem;
  color: #344161;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export default class ButtonComponent extends React.Component {
  handleClick = () => {
    console.log(this.props.text);
  };

  render() {
    return (
      <ButtonStyled onClick={this.handleClick}>{this.props.text}</ButtonStyled>
    );
  }
}
