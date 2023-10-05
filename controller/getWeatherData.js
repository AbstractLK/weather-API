const userModel = require("../models/userModel");

async function getWeatherData(req, res){

    const {id, date} = req.query;
    const user = await userModel.findById(id);
    const weatherData = user.weatherData.filter(entry => entry.date.toISOString().split('T')[0] === date);
    if (!weatherData[0]) {
        throw 'Weather data are not found on this day.';
    }
    res.json(weatherData);

}

module.exports = getWeatherData;