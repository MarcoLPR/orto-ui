import { ethers } from "ethers";
import { simpleRpcProvider } from "../utils/providers";
import { swapOrtoAddress, ortoAddress, usdAddress } from "../constants";

// ABI
import erc20Abi from "../config/abi/erc20.json";
import ortoAbi from "../config/abi/orto.json";

const getContract = (
  abi: any,
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getOrtoContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(erc20Abi, ortoAddress, signer);
};

export const getUsdContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(erc20Abi, usdAddress, signer);
};

export const getOrtoSwapContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(ortoAbi, swapOrtoAddress, signer);
};
