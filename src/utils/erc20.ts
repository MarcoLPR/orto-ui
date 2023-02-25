import Web3 from "web3";
import { provider as ProviderType } from "web3-core";
import { Contract, ethers } from "ethers";
import erc20 from "../config/abi/erc20.json";

export const getContract = (provider: ProviderType, address: string) => {
  const web3 = new Web3(provider);
  const contract = new web3.eth.Contract(erc20 as any, address);
  return contract;
};

export const getAllowance = async (
  tokenContract: Contract,
  swapAddress: string,
  account: string
): Promise<string> => {
  try {
    const allowance: string = await tokenContract.allowance(
      account,
      swapAddress
    );
    return allowance;
  } catch (e) {
    return "0";
  }
};

export const approveToken = async (
  tokenContract: Contract,
  swapAddress: string
): Promise<boolean> => {
  try {
    const res = await tokenContract.approve(
      swapAddress,
      ethers.constants.MaxUint256
    );
    return res;
  } catch (e) {
    return false;
  }
};

export const getTokenBalance = async (
  provider: ProviderType,
  tokenAddress: string,
  userAddress: string
): Promise<string> => {
  const contract = getContract(provider, tokenAddress);
  try {
    const balance: string = await contract.methods
      .balanceOf(userAddress)
      .call();
    return balance;
  } catch (e) {
    return "0";
  }
};
