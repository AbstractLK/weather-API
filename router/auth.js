const express = require('express');
const router = express.Router();
const signup = require('../controller/signup');
const getAll = require('../controller/getAll');
const insertWeather = require('../controller/insertWeather');

router.post('/signup', signup);
router.get('/insertWeather', insertWeather);
router.get('/getAll', getAll);

module.exports = router;