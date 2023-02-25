import React from "react";
import { useOrtoTokenContract, useUsdContract } from "./useContract";
import { approveToken } from "../utils/erc20";
import { swapOrtoAddress } from "../constants";

export const useOrtoApprove = () => {
  const contract = useOrtoTokenContract();
  const swapAddress = swapOrtoAddress;
  const callback = React.useCallback(async () => {
    const res = await approveToken(contract!, swapAddress);
    return res;
  }, [contract]);

  return callback;
};

export const useUsdApprove = () => {
  const contract = useUsdContract();
  const swapAddress = swapOrtoAddress;

  const callback = React.useCallback(async () => {
    const res = await approveToken(contract!, swapAddress);
    return res;
  }, [contract]);

  return callback;
};
