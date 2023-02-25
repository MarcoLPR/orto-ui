import React from "react";
import { Card, StyledAction, StyledBody } from "baseui/card";
import FullWidthButton from "../shared/buttons/FullWidthButton";
import useAuth from "../../hooks/useAuth";
import { ConnectorNames } from "../../types/wallet";

const ConnectWallet = () => {
  const { login } = useAuth();

  const connectWallet = () => login(ConnectorNames.Injected);

  return (
    <Card title="Connect Wallet">
      <StyledBody>
        <p>Connect your wallet to start using OnlyRise</p>
      </StyledBody>
      <StyledAction>
        <FullWidthButton onClick={connectWallet}>
          Connect Wallet
        </FullWidthButton>
      </StyledAction>
    </Card>
  );
};

export default ConnectWallet;
