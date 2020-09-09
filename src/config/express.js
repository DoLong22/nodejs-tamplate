const express = require('express');
const router = require('../api/routers/index');

const app = express();

app.use('/api',router);

module.exports = app;