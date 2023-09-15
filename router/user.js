const express = require('express');
const router = express.Router();
const update = require('../controller/update')
const getWeatherData = require('../controller/getWeatherData')

router.put('/update', update);
router.get('/getWeatherData', getWeatherData);

module.exports = router;