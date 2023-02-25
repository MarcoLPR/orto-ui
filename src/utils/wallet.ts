export const setupNetwork = async () => {
  const provider = window.ethereum;
  if (provider && provider.request) {
    try {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x61", // 0x1e14
            chainName: "CANTO",
            nativeCurrency: {
              name: "CANTO",
              symbol: "CANTO",
              decimals: 18,
            },
            rpcUrls: ["https://data-seed-prebsc-1-s2.binance.org:8545"], //https://canto.slingshot.finance/
            blockExplorerUrls: ["https://evm.explorer.canto.io/"],
          },
        ],
      });
      return true;
    } catch (error) {
      console.error("Failed to setup the network in Metamask:", error);
      return false;
    }
  } else {
    console.error(
      "Can't setup the CANTO network on metamask because window.ethereum is undefined"
    );
    return false;
  }
};

export const registerToken = async (
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number
) => {
  const provider = window.ethereum;
  if (provider && provider.request) {
    const tokenAdded = await provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
        },
      },
    });

    return tokenAdded;
  }
};
