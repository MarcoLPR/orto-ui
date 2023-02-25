import { useEffect, useState } from "react";
import { getSalePenalty } from "../utils/ortoSwap";
import { useSwapContract } from "./useContract";

export const useSalePenalty = () => {
  const [ortoAmount, setOrtoAmount] = useState("0");
  const [penalty, setPenalty] = useState("0");
  const contract = useSwapContract();

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getSalePenalty(contract!, ortoAmount);
      setPenalty(res);
    };

    if (contract) {
      fetchBalance();
    }
  }, [ortoAmount, contract]);

  return [penalty, setOrtoAmount];
};
