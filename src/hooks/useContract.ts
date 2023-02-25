import { useMemo } from "react";
import useActiveWeb3React from "./useActiveWeb3React";
import { getOrtoSwapContract } from "../utils/contractHelpers";

export const useSwapContract = () => {
  const { library } = useActiveWeb3React();
  return useMemo(
    () => (library ? getOrtoSwapContract(library.getSigner()) : null),
    [library]
  );
};
