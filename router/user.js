const express = require('express');
const router = express.Router();
const update = require('../controller/update')
const getWeatherData = require('../controller/getWeatherData')
const getAll = require('../controller/getAll');
const insertWeather = require('../controller/insertWeather');

router.put('/update', update);
router.get('/insertWeather', insertWeather);
router.get('/getWeatherData', getWeatherData);
router.get('/getAll', getAll);

module.exports = router;