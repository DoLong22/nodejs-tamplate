const express = require('express');
const controller = require('../controllers/hello-world.controller');

const router = express.Router();

router.route('/').get(controller.helloWorld);

module.exports = router;
