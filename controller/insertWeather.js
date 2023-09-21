const userModel = require("../models/userModel");
const weather = require('../utils/weather');

async function insertWeather(req, res){
    try {
        const {id} = req.query;
        const user = await userModel.findById(id);
        const weatherInfo = await weather(user.location);

        user.weatherData.push({
            date: new Date(), // Convert date string to Date object
            temperature: weatherInfo.temperature.toFixed(1),
            weatherCondition: weatherInfo.weatherCondition,
        });
        await user.save();
        res.status(201).send(weatherInfo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

module.exports = insertWeather;