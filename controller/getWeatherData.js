const userModel = require("../models/userModel");

async function getWeatherData(req, res){
    try {
        const {id, date} = req.query;
        const user = await userModel.findById(id);
        const weatherData = user.weatherData.filter(entry => entry.date.toISOString().split('T')[0] === date);
        if (!weatherData[0]) {
            console.log('Weather data are not found on this day.');
            return res.send('Weather data are not found on this day.');
        }
        res.json(weatherData);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

module.exports = getWeatherData;