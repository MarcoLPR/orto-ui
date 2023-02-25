import React from "react";
import { buyOrto, sellOrto } from "../utils/ortoSwap";
import { useSwapContract } from "./useContract";
import { useReferrer } from "./useReferrer";

export const useBuyOrto = () => {
  const contract = useSwapContract();
  const referrer = useReferrer();

  const callback = React.useCallback(
    async (tokenAmount: string, minReceived: string) => {
      const res = await buyOrto(contract!, tokenAmount, minReceived, referrer);
      return res;
    },
    [contract]
  );

  return callback;
};

export const useSellOrto = () => {
  const contract = useSwapContract();

  const callback = React.useCallback(
    async (tokenAmount: string, minReceived: string) => {
      const res = await sellOrto(contract!, tokenAmount, minReceived);
      return res;
    },
    [contract]
  );

  return callback;
};
