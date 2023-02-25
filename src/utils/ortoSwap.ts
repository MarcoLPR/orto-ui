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
      .toFixed(2);

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
      .toFixed(2);
    const formattedPenalty = new BigNumber(penalty.toString())
      .div(multiplier)
      .toFixed(2);

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
      .toFixed(2);

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
    return "0xcB978C0c28E7D6960dA5716D19A0cE44699a6301";
  }
};

export const getReferrerInfo = async (
  contract: Contract,
  address: string
): Promise<string[]> => {
  try {
    const referrerInfo = await contract.referringInfo(address);
    console.log(referrerInfo[0], referrerInfo[1]);
    const referrals = referrerInfo[0].div(multiplier).toString();
    const rewards = referrerInfo[1].div(multiplier).toFixed(2);

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

export const swapOrtoForTokens = async (
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
    return await contract.swapOrtoForTokens(
      bigNumberBalance,
      bigNumberMinReceived
    );
  } catch (e) {
    return false;
  }
};

export const swapTokensForOrto = async (
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
    return await contract.swapTokensForOrto(
      bigNumberBalance,
      bigNumberMinReceived,
      referrer
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};
