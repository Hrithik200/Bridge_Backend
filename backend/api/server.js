const express = require('express');
const cors = require('cors');
const tokensRoutes = require('../routes/tokensRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', tokensRoutes);

module.exports = app;
