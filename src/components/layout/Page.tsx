import React from "react";
import { useWeb3React } from "@web3-react/core";
import { styled } from "baseui/styles/styled";
import ConnectWallet from "./ConnectWallet";

const StyledPage = styled("div", {
  maxWidth: "1280px",
  margin: "25px auto",
});

const Page = ({ children }: any) => {
  const { account } = useWeb3React();

  return <StyledPage>{account ? children : <ConnectWallet />}</StyledPage>;
};

export default Page;
