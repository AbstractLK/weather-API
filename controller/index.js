const getAll = require('./getAll');
const getWeatherData = require('./getWeatherData');
const insertWeather = require('./insertWeather');
const signIn = require('./signIn');
const signup = require('./signup');
const update = require('./update');
const deleteUser = require('./deleteUser');

module.exports = {
    getAll,
    getWeatherData,
    insertWeather,
    signIn,
    signup,
    update,
    deleteUser
}
