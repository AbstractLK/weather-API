const userModel = require("../models/userModel");

async function getWeatherData(req, res){
    try {
        const {id, date} = req.query;
        const user = await userModel.findById(id);
        const weatherData = user.weatherData.filter(entry => entry.date.toISOString().split('T')[0] === date);
        if (!weatherData) {
            console.log('Weather data not found for the specified date');
        }
        res.json(weatherData);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

module.exports = getWeatherData;