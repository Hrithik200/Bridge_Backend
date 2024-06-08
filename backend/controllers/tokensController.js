const { fetchTokens, fetchQuote, createTransaction ,fetchChain} = require('../services/xyFinanceService');

// To get the blockchain and it will pass to getTokens
//api 1
exports.getChains = async (req, res) => {
  try {
    const tokens = await fetchChain();
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//api 2
exports.getTokens = async (req, res) => {
  try {
    const tokens = await fetchTokens(req.query.chainId);
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//api 3
exports.getQuote = async (req, res) => {
  try {
    const quote = await fetchQuote(req.query);
    console.log("WE ARE IN THE QUOTE OF CONTROLLER")
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: "ERROR IN ERROR" });
  }
};
//api 4
exports.getTransactionParams = async (req, res) => {
  try {
    const params = await createTransaction(req.query);
    console.log("WE ARE IN THE PARAMS OF CONTROLLER")
    res.json(params);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

