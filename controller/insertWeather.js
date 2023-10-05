const userModel = require("../models/userModel");
const weather = require('../utils/weather');

async function insertWeather(req, res){

    const {id} = req.query;
    const user = await userModel.findById(id);
    const weatherInfo = await weather(user.location);

    user.weatherData.push({
        date: new Date(), // Convert date string to Date object
        temperature: weatherInfo.temperature,
        weatherCondition: weatherInfo.weatherCondition,
    });
    await user.save();
    res.status(201).send(weatherInfo);


}

module.exports = insertWeather;