import useActiveWeb3React from "./useActiveWeb3React";
import { useSearchParams } from "react-router-dom";
import React from "react";
import { getCommunityAddress, getReferrer } from "../utils/ortoSwap";
import { useSwapContract } from "./useContract";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

export const useReferrer = () => {
  const { account } = useActiveWeb3React();
  const [searchParams] = useSearchParams();
  const [referrer, setReferrer] = React.useState("");
  const contract = useSwapContract();

  React.useEffect(() => {
    const fetchReferrer = async () => {
      const res = await getReferrer(contract!, account!);
      const communityAddress = await getCommunityAddress(contract!);
      if (res === NULL_ADDRESS) {
        const urlReferrer = searchParams.get("ref");
        setReferrer(urlReferrer || communityAddress);
      } else {
        setReferrer(res);
      }
    };

    if (contract && account) {
      fetchReferrer();
    }
  }, [account, contract]);

  return referrer;
};
