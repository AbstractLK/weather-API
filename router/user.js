const express = require('express');
const router = express.Router();
const controller = require('../controller/index');

router.put('/update', controller.update);
router.get('/insertWeather', controller.insertWeather);
router.get('/getWeatherData', controller.getWeatherData);
router.get('/getAll', controller.getAll);
router.delete('/delete', controller.deleteUser);

module.exports = router;