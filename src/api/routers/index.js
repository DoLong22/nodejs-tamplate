const express = require('express');
const helloWorldRouter = require('./hello-world');
const router = express.Router();

router.use('/hello-world', helloWorldRouter)
module.exports = router;