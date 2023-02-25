import * as React from "react";
import { AppNavBar, NavItem } from "baseui/app-nav-bar";
import truncateAddress from "../../utils/truncateAddress";
import useAuth from "../../hooks/useAuth";
import { ConnectorNames } from "../../types/wallet";
import { useWeb3React } from "@web3-react/core";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

enum ITEMS_LABELS {
  REFERRAL = "Referral",
  SWAP = "Swap",
  CONNECT_WALLET = "Connect Wallet",
  DISCONNECT = "Disconnect",
  ACCOUNT_DETAILS = "Account Details",
}

const getMainItems = (account: string, location: string): NavItem[] => [
  {
    active: location.includes(ITEMS_LABELS.REFERRAL.toLocaleLowerCase()),
    label: ITEMS_LABELS.REFERRAL,
  },
  {
    active: location.includes(ITEMS_LABELS.SWAP.toLocaleLowerCase()),
    label: ITEMS_LABELS.SWAP,
  },
  {
    label: account ? ITEMS_LABELS.DISCONNECT : ITEMS_LABELS.CONNECT_WALLET,
  },
  {
    label: ITEMS_LABELS.ACCOUNT_DETAILS,
    info: account ? truncateAddress(account) : "",
  },
];

const NavigationBar = () => {
  const { login, logout } = useAuth();
  const { account } = useWeb3React();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const navigateWithParams = (path: string) =>
    navigate({
      pathname: path,
      search: searchParams.toString(),
    });

  const handleMainItemSelect = (item: NavItem) => {
    switch (item.label) {
      case ITEMS_LABELS.DISCONNECT:
        logout();
        break;
      case ITEMS_LABELS.CONNECT_WALLET:
        login(ConnectorNames.Injected);
        break;
      case ITEMS_LABELS.REFERRAL:
        navigateWithParams("/referral");
        break;
      case ITEMS_LABELS.SWAP:
        navigateWithParams("/swap");
        break;
    }
  };

  React.useEffect(() => login(ConnectorNames.Injected), []);

  return (
    <AppNavBar
      title="OnlyRise"
      mainItems={getMainItems(account!, location.pathname)}
      onMainItemSelect={handleMainItemSelect}
      mapItemToNode={(item) => (
        <div>{item.info !== undefined ? item.info : item.label}</div>
      )}
    />
  );
};

export default NavigationBar;
