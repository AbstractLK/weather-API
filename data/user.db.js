const userModel = require('../models/userModel');
const weatherInfo = require('../utils/weather');

async function insert(data) {
    const {temperature, weatherCondition} = await weatherInfo(data.location);
    const user = {
        email: data.email,
        password: data.password,
        location: data.location,
        weatherData: {
            date: new Date(),
            temperature: temperature,
            weatherCondition: weatherCondition
        }
    };
    const savedUser = await userModel.create(user);
    return (savedUser);
}

async function isExist(value){
    const res = await userModel.exists({email: value});
    return (res !== null);
}

let userDB = {
    insert,
    isExist
}

Object.freeze(userDB);
module.exports = userDB