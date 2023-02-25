import { useEffect, useState } from "react";
import {
  getAmountOrtoForTokens,
  getAmountTokensForOrto,
} from "../utils/ortoSwap";
import { useSwapContract } from "./useContract";

export const useSwapOrtoAmounts = () => {
  const [usdAmount, setUsdAmount] = useState("0");
  const [balance, setBalance] = useState("0");
  const contract = useSwapContract();

  useEffect(() => {

    const fetchBalance = async () => {
      const res = await getAmountOrtoForTokens(contract!, usdAmount);
      setBalance(res);
    };

    if (contract) {
      fetchBalance();
    }
  }, [usdAmount, contract]);

  return [balance, usdAmount, setUsdAmount];
};

export const useSwapUsdAmounts = () => {
  const [ortoAmount, setOrtoAmount] = useState("0");
  const [balance, setBalance] = useState("0");
  const [penalty, setPenalty] = useState("0");
  const contract = useSwapContract();

  useEffect(() => {
    const fetchBalance = async () => {
      const [balance, penalty] = await getAmountTokensForOrto(
        contract!,
        ortoAmount
      );
      setBalance(balance);
      setPenalty(penalty);
    };

    if (contract) {
      fetchBalance();
    }
  }, [ortoAmount, contract]);

  return [balance, penalty, ortoAmount, setOrtoAmount];
};
