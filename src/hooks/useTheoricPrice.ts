import { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { balanceORTO, reserveORTO } from "../utils/ortoSwap";
import useRefresh from "./useRefresh";
import { useSwapContract } from "./useContract";

export const useTheoricPrice = () => {
  const [price, setPrice] = useState("0");
  const contract = useSwapContract();
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalance = async () => {
      const resBalance = await balanceORTO(contract!);
      const resReserve = await reserveORTO(contract!);
      setPrice(
        new BigNumber(resReserve).div(new BigNumber(resBalance)).toString()
      );
    };

    if (contract) {
      fetchBalance();
    }
  }, [contract, fastRefresh]);

  return [price];
};
