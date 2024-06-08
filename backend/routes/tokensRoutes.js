const express = require('express');
const { getTokens, getQuote, getTransactionParams ,getChains} = require('../controllers/tokensController');
const router = express.Router();

router.get('/chain',getChains);
router.get('/tokens', getTokens);
router.get('/quotes', getQuote);
router.get('/params', getTransactionParams);


module.exports = router;
