import { useMemo } from "react";
import useActiveWeb3React from "./useActiveWeb3React";
import { getOrtoContract, getOrtoSwapContract, getUsdContract } from "../utils/contractHelpers";

export const useSwapContract = () => {
  const { library } = useActiveWeb3React();
  return useMemo(
    () => (library ? getOrtoSwapContract(library.getSigner()) : null),
    [library]
  );
};

export const useOrtoTokenContract = () => {
  const { library } = useActiveWeb3React();
  return useMemo(
    () => (library ? getOrtoContract(library.getSigner()) : null),
    [library]
  );
};

export const useUsdContract = () => {
  const { library } = useActiveWeb3React();
  return useMemo(
    () => (library ? getUsdContract(library.getSigner()) : null),
    [library]
  );
};