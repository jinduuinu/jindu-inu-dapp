import React from "react";
import styled from "styled-components";
import { useWallet, UseWalletProvider } from "use-wallet";

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

function Metamask() {
  const wallet = useWallet();
  const blockNumber = wallet.getBlockNumber();

  return (
    <>
      <ButtonStyled onClick={() => wallet.connect()}>Connect</ButtonStyled>
    </>
  );
}

export default () => (
  <UseWalletProvider chainId={1}>
    <Metamask />
  </UseWalletProvider>
);
