import React from "react";
import { swapOrtoForTokens, swapTokensForOrto } from "../utils/ortoSwap";
import { useSwapContract } from "./useContract";
import { useReferrer } from "./useReferrer";

export const useSwapOrtoForTokens = () => {
  const contract = useSwapContract();

  const callback = React.useCallback(
    async (tokenAmount: string, minReceived: string) => {
      const res = await swapOrtoForTokens(contract!, tokenAmount, minReceived);
      return res;
    },
    [contract]
  );

  return callback;
};

export const useSwapTokensForOrto = () => {
  const contract = useSwapContract();
  const referrer = useReferrer();

  const callback = React.useCallback(
    async (tokenAmount: string, minReceived: string) => {
      const res = await swapTokensForOrto(
        contract!,
        tokenAmount,
        minReceived,
        referrer
      );
      return res;
    },
    [contract]
  );

  return callback;
};
