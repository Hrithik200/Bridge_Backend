const axios = require('axios');
const { XY_FINANCE_API_URL } = require('../constants/apiUrls');

exports.fetchChain= async ()=>{
  try {
    const response = await axios.get(`${XY_FINANCE_API_URL}/supportedChains`);
    const chain = response.data;
    console.log("Chain fetched successfully");
    return chain;
  } catch (error) {
    console.error("Error fetching chain:", error.message);
    throw new Error('Error fetching chain');
  }
}
exports.fetchTokens = async (chainId) => {
  try {
    const response = await axios.get(`${XY_FINANCE_API_URL}/recommendedTokens?chainId=${chainId}`);
    const tokens = response.data;
    console.log("Tokens fetched successfully");
    return tokens;
  } catch (error) {
    console.error("Error fetching supported tokens:", error.message);
    throw new Error('Error fetching supported tokens');
  }
};
exports.fetchQuote = async (data) => {

  console.log("--------------------------------IN THE QUOTE--------------------------------")
  const { srcChainId, srcQuoteTokenAddress, srcQuoteTokenAmount, dstChainId, dstQuoteTokenAddress, slippage, affiliate, commissionRate, bridgeProviders, srcSwapProviders, dstSwapProviders } = data;
  // we only want till slippage
    console.log(srcChainId,"srcChainId--------------------------------")
  if (!srcChainId || !srcQuoteTokenAddress || !srcQuoteTokenAmount || !dstChainId || !dstQuoteTokenAddress || slippage === undefined) {
    console.log("Error 11")
  }

  try {
    const response = await axios.get(`${XY_FINANCE_API_URL}/quote`, {
      params: {
        srcChainId,
        srcQuoteTokenAddress,
        srcQuoteTokenAmount,
        dstChainId,
        dstQuoteTokenAddress,
        slippage,
        affiliate,
        commissionRate,
        bridgeProviders,
        srcSwapProviders,
        dstSwapProviders
      }
    });
    const quote = response.data;
    return quote
  } catch (error) {
    console.log("in service error")
  console.log(error);
  }
};



exports.createTransaction = async (data) => {

  console.log("In the create transaction----------------------------------------------------------------")
  const { srcChainId, srcQuoteTokenAddress, srcQuoteTokenAmount, dstChainId, dstQuoteTokenAddress, slippage, receiver, affiliate, commissionRate, bridgeProvider, srcBridgeTokenAddress, dstBridgeTokenAddress, srcSwapProvider, dstSwapProvider } = data;
  console.log("srcQuoteTokenAddress: " + srcQuoteTokenAddress)
  try {
    const response = await axios.get(`${XY_FINANCE_API_URL}/buildTx`, {
      params: {
        srcChainId,
        srcQuoteTokenAddress,
        srcQuoteTokenAmount,
        dstChainId,
        dstQuoteTokenAddress,
        slippage,
        receiver,
        affiliate,
        commissionRate,
        bridgeProvider,
        srcBridgeTokenAddress,
        dstBridgeTokenAddress,
        srcSwapProvider,
        dstSwapProvider
      }
    });
    console.log("HELLLLLLLLLLLLLLLLLLo")
    const transactionParams = response.data;
 
    return transactionParams;
  } catch (error) {
  console.log(error)
  }
}
