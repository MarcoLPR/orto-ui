import useActiveWeb3React from "./useActiveWeb3React";
import React from "react";
import { useOrtoTokenContract, useUsdContract } from "./useContract";
import { getAllowance } from "../utils/erc20";
import { swapOrtoAddress } from "../constants";

export const useOrtoAllowance = () => {
  const { account } = useActiveWeb3React();
  const [allowance, setAllowance] = React.useState("0");
  const contract = useOrtoTokenContract();
  const swapAddress = swapOrtoAddress;
  const allowanceCallback = React.useCallback(async () => {
    if (contract && account) {
      const res = await getAllowance(contract!, swapAddress, account!);
      setAllowance(res);
    }
  }, []);
  return [allowance, allowanceCallback];
};

export const useUsdAllowance = () => {
  const { account } = useActiveWeb3React();
  const [allowance, setAllowance] = React.useState("0");
  const contract = useUsdContract();
  const swapAddress = swapOrtoAddress;

  const allowanceCallback = React.useCallback(async () => {
    if (contract && account) {
      const res = await getAllowance(contract!, swapAddress, account!);
      setAllowance(res);
    }
  }, []);
  return [allowance, allowanceCallback];
};
