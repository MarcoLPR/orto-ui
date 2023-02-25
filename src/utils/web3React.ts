import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";

const POLLING_INTERVAL = 12000;
const chainId = 97; //7700

enum ConnectorNames {
  Injected = "injected",
}

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
};

export const getLibrary = (provider: any): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

export const signMessage = async (
  provider: any,
  account: string,
  message: string
): Promise<string> => {
  return provider.getSigner(account).signMessage(message);
};
