const express = require('express');
const router = express.Router();
const controller = require('../controller/index');

router.post('/signup', controller.signup);
router.post('/signIn', controller.signIn);

module.exports = router;