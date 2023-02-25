import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { SnackbarProvider } from "baseui/snackbar";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./utils/web3React";
import { RefreshContextProvider } from "./contexts";

const engine = new Styletron();

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <SnackbarProvider>
          <RefreshContextProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </RefreshContextProvider>
        </SnackbarProvider>
      </BaseProvider>
    </StyletronProvider>
  </Web3ReactProvider>
);

export default Providers;
