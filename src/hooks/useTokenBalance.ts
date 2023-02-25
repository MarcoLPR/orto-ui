import { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { getTokenBalance } from "../utils/erc20";
import { useWeb3React } from "@web3-react/core";
import useRefresh from "./useRefresh";
import { accountIsValid } from "../utils/guards";

const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0));
  const { account, library } = useWeb3React();
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalance = async () => {
      if (accountIsValid(account)) {
        const res = await getTokenBalance(library, tokenAddress, account);
        setBalance(new BigNumber(res));
      }
    };

    if (account && library) {
      fetchBalance();
    }
  }, [account, tokenAddress, fastRefresh, library]);

  return balance;
};

export default useTokenBalance;
