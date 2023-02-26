import React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { LabelXSmall } from "baseui/typography";
import Page from "../components/layout/Page";
import { useTheoricPrice } from "../hooks/useTheoricPrice";
import { useSwapOrtoAmounts, useSwapUsdAmounts } from "../hooks/useSwapAmounts";
import { SwapCard } from "../components/shared";
import FullWidthButton from "../components/shared/buttons/FullWidthButton";
import FullWidthGroupButtons from "../components/shared/buttons/FullWidthGroupButtons";
import AutoMarginButton from "../components/shared/buttons/AutoMarginButton";
import { useBuyOrto, useSellOrto } from "../hooks/useSwap";
import { useOrtoAllowance, useUsdAllowance } from "../hooks/useAllowance";
import { useOrtoApprove, useUsdApprove } from "../hooks/useApprove";
import { useWeb3React } from "@web3-react/core";

const calculateAmountWithSlippage = (amount: number, slippage: number) => {
  const multiplier = 1 - slippage / 100;
  return amount * multiplier;
};

const calculateNetAmount = (amount: number, penalty: number) =>
  (amount - penalty).toFixed(2);

const calculatePriceImpact = (
  amount: number,
  price: number,
  minReceived: number
) => (((price * amount - minReceived) / (price * amount)) * 100).toFixed(2);

const getSaleStats = (
  ortoToSell: number,
  usdToGet: number,
  penalty: number,
  price: number,
  slippage: number
) => {
  const minReceived = calculateAmountWithSlippage(usdToGet, slippage);
  const netAmount = calculateNetAmount(Number(minReceived), penalty);
  const priceImpact = Number(usdToGet)
    ? calculatePriceImpact(ortoToSell, price, Number(usdToGet))
    : "0";
  return (
    <>
      <LabelXSmall>{`Minimum received: ${minReceived} USD`}</LabelXSmall>
      <LabelXSmall>{`Price Impact: ${priceImpact}%`}</LabelXSmall>
      <LabelXSmall>{`Penalty: ${penalty} USD`}</LabelXSmall>
      <LabelXSmall>{`Net Minimum received: ${netAmount} USD`}</LabelXSmall>
    </>
  );
};

const getActiveButton = (slippage: number) => {
  switch (slippage) {
    case 0.1:
      return 0;
    case 0.5:
      return 1;
    case 1:
      return 2;
    default:
      return 3;
  }
};

const Swap = () => {
  const { account } = useWeb3React();
  const [slippage, setSlippage] = React.useState(0.1);
  const [ortoBalance, usdAmount, setUsdAmount] = useSwapOrtoAmounts();
  const [usdBalance, penalty, ortoAmount, setOrtoAmount] = useSwapUsdAmounts();
  const [theoricPrice] = useTheoricPrice();
  const buyCallback = useBuyOrto();
  const sellCallback = useSellOrto();
  const [ortoAllowance, getOrtoAllowance] = useOrtoAllowance();
  const [usdAllowance, getUsdAllowance] = useUsdAllowance();
  const ortoApprove = useOrtoApprove();
  const usdApprove = useUsdApprove();

  React.useEffect(() => {
    if (typeof getOrtoAllowance !== "string") {
      getOrtoAllowance();
    }
    if (typeof getUsdAllowance !== "string") {
      getUsdAllowance();
    }
  }, [getOrtoAllowance, getUsdAllowance, account]);

  const changeUsdAmount = (e: any) => {
    (setUsdAmount as React.Dispatch<React.SetStateAction<string>>)(
      e.target.value.toString()
    );
  };
  const changeOrtoAmount = (e: any) => {
    (setOrtoAmount as React.Dispatch<React.SetStateAction<string>>)(
      e.target.value.toString()
    );
  };

  const onOrtoApprove = async () => {
    const res = await ortoApprove();
    if (res && typeof getOrtoAllowance !== "string") {
      getOrtoAllowance();
    }
  };

  const onUsdApprove = async () => {
    const res = await usdApprove();
    if (res && typeof getUsdAllowance !== "string") {
      getUsdAllowance();
    }
  };

  const changeSlippage = (e: any) => {
    setSlippage(e.target.value);
  };

  const changeFixedSlippage = (value: number) => () => {
    setSlippage(value);
  };

  const swapOrtoForUsd = async () => {
    await sellCallback(
      ortoAmount.toString(),
      calculateAmountWithSlippage(Number(usdBalance), slippage).toString()
    );
  };

  const swapUsdForOrto = async () => {
    await buyCallback(
      usdAmount.toString(),
      calculateAmountWithSlippage(Number(ortoBalance), slippage).toString()
    );
  };

  return (
    <Page>
      <FlexGrid
        flexGridColumnCount={3}
        flexGridColumnGap="scale500"
        flexGridRowGap="scale800"
      >
        <FlexGridItem>
          <SwapCard
            actions={
              <FullWidthButton
                onClick={
                  String(usdAllowance) === "0" ? onUsdApprove : swapUsdForOrto
                }
              >
                {String(usdAllowance) === "0" ? "Approve" : "Swap"}
              </FullWidthButton>
            }
            headerImage="https://wallpapertag.com/wallpaper/middle/9/1/5/135874-download-free-low-poly-background-1920x1080.jpg"
          >
            <FormControl>
              <Input
                value={parseFloat(usdAmount.toString())}
                onChange={changeUsdAmount}
                placeholder="0"
                type="number"
                clearOnEscape
                endEnhancer="USD"
              />
            </FormControl>
            <LabelXSmall>{`Minimum received: ${calculateAmountWithSlippage(
              Number(ortoBalance),
              slippage
            )} ORTO`}</LabelXSmall>
          </SwapCard>
        </FlexGridItem>
        <FlexGridItem>
          <SwapCard
            actions={
              <FullWidthButton
                onClick={
                  String(ortoAllowance) === "0" ? onOrtoApprove : swapOrtoForUsd
                }
              >
                {String(ortoAllowance) === "0" ? "Approve" : "Swap"}
              </FullWidthButton>
            }
            headerImage="https://wallpapertag.com/wallpaper/middle/9/1/5/135874-download-free-low-poly-background-1920x1080.jpg"
          >
            <FormControl>
              <Input
                value={parseFloat(ortoAmount.toString())}
                onChange={changeOrtoAmount}
                placeholder="0"
                type="number"
                clearOnEscape
                endEnhancer="ORTO"
              />
            </FormControl>
            {getSaleStats(
              Number(ortoAmount),
              Number(usdBalance),
              Number(penalty),
              Number(theoricPrice),
              slippage
            )}
          </SwapCard>
        </FlexGridItem>
        <FlexGridItem>
          <Card>
            <StyledBody>
              <FormControl label={() => "Slippage Tolerance (0.1% - 5%)"}>
                <Input
                  value={slippage}
                  onChange={changeSlippage}
                  placeholder="0"
                  type="number"
                  clearOnEscape
                  endEnhancer="%"
                  min={0.1}
                  max={5}
                />
              </FormControl>
            </StyledBody>
            <StyledAction>
              <FullWidthGroupButtons
                selected={getActiveButton(Number(slippage))}
              >
                <AutoMarginButton onClick={changeFixedSlippage(0.1)}>
                  0.1%
                </AutoMarginButton>
                <AutoMarginButton onClick={changeFixedSlippage(0.5)}>
                  0.5%
                </AutoMarginButton>
                <AutoMarginButton onClick={changeFixedSlippage(1)}>
                  1.0%
                </AutoMarginButton>
              </FullWidthGroupButtons>
            </StyledAction>
          </Card>
        </FlexGridItem>
      </FlexGrid>
    </Page>
  );
};

export default Swap;
