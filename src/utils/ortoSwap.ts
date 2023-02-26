import BigNumber from "bignumber.js";
import { Contract } from "ethers";

const multiplier = new BigNumber(10).pow(18);

const convertToFullNumber = (value: BigNumber) =>
  Number(value.toString()).toLocaleString("fullwide", { useGrouping: false });

export const getAmountOrtoForTokens = async (
  contract: Contract,
  balance: string
): Promise<string> => {
  const bigNumberBalance = convertToFullNumber(
    new BigNumber(balance).times(multiplier)
  );
  try {
    const ortoBalance: BigNumber = await contract!.getAmountOrtoForTokens(
      bigNumberBalance
    );
    const formattedResult = new BigNumber(ortoBalance.toString())
      .div(multiplier)
      .toString();

    return formattedResult;
  } catch (e) {
    return "0";
  }
};

export const getAmountTokensForOrto = async (
  contract: Contract,
  balance: string
): Promise<string[]> => {
  const bigNumberBalance = convertToFullNumber(
    new BigNumber(balance).times(multiplier)
  );
  try {
    const usdBalance: BigNumber = await contract.getAmountTokensForOrto(
      bigNumberBalance
    );
    const penalty: BigNumber = await contract.getSalePenalty(usdBalance);

    const formattedResult = new BigNumber(usdBalance.toString())
      .div(multiplier)
      .toString();
    const formattedPenalty = new BigNumber(penalty.toString())
      .div(multiplier)
      .toString();

    return [formattedResult, formattedPenalty];
  } catch (e) {
    return ["0", "0"];
  }
};

export const getSalePenalty = async (
  contract: Contract,
  balance: string
): Promise<string> => {
  const bigNumberBalance = convertToFullNumber(
    new BigNumber(balance).times(multiplier)
  );
  try {
    const penalty: BigNumber = await contract.getSalePenalty(bigNumberBalance);
    const formattedResult = new BigNumber(penalty.toString())
      .div(multiplier)
      .toString();

    return formattedResult;
  } catch (e) {
    return "0";
  }
};

export const getReferrer = async (
  contract: Contract,
  address: string
): Promise<string> => {
  try {
    return await contract.referrer(address);
  } catch (e) {
    return "0x0000000000000000000000000000000000000000";
  }
};

export const getReferrerInfo = async (
  contract: Contract,
  address: string
): Promise<string[]> => {
  try {
    const referrerInfo = await contract.referringInfo(address);
    const rewards = new BigNumber(referrerInfo[0].toString())
      .div(multiplier)
      .toFixed(6);
    const referrals = referrerInfo[1];

    return [referrals, rewards];
  } catch (e) {
    return ["0", "0"];
  }
};

export const balanceORTO = async (contract: Contract): Promise<string> => {
  try {
    const ortoBalance: BigNumber = await contract.balanceORTO();
    return ortoBalance.toString();
  } catch (e) {
    return "0";
  }
};

export const reserveORTO = async (contract: Contract): Promise<string> => {
  try {
    const ortoReserves: BigNumber = await contract.reserves();
    return ortoReserves.toString();
  } catch (e) {
    return "0";
  }
};

export const getCommunityAddress = async (contract: Contract): Promise<string> => {
  try {
    const communityAddress: string = await contract.communityAddress();
    return communityAddress;
  } catch (e) {
    return "0";
  }
};

export const sellOrto = async (
  contract: Contract,
  balance: string,
  minReceived: string
): Promise<boolean> => {
  const bigNumberBalance = convertToFullNumber(
    new BigNumber(balance).times(multiplier)
  );
  const bigNumberMinReceived = convertToFullNumber(
    new BigNumber(minReceived).times(multiplier)
  );
  try {
    console.log(bigNumberBalance.toString(), bigNumberMinReceived.toString());
    return await contract.sellOrto(bigNumberBalance, bigNumberMinReceived);
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const buyOrto = async (
  contract: Contract,
  balance: string,
  minReceived: string,
  referrer: string
): Promise<boolean> => {
  const bigNumberBalance = convertToFullNumber(
    new BigNumber(balance).times(multiplier)
  );
  const bigNumberMinReceived = convertToFullNumber(
    new BigNumber(minReceived).times(multiplier)
  );
  try {
    return await contract.buyOrto(
      bigNumberBalance,
      bigNumberMinReceived,
      referrer
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};
