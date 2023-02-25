import useActiveWeb3React from "./useActiveWeb3React";
import React from "react";
import { getReferrerInfo } from "../utils/ortoSwap";
import { useSwapContract } from "./useContract";

export const useReferrerInfo = () => {
  const { account } = useActiveWeb3React();
  const [referrerInfo, setReferrerInfo] = React.useState(["0", "0"]);
  const contract = useSwapContract();

  React.useEffect(() => {
    const fetchReferrerInfo = async () => {
      const res = await getReferrerInfo(contract!, account!);
      setReferrerInfo(res);
    };

    if (contract && account) {
      fetchReferrerInfo();
    }
  }, [account, contract]);

  return referrerInfo;
};
