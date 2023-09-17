const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    date: {required: true, type: Date},
    temperature: Number,
    weatherCondition: String
})

const userSchema = new mongoose.Schema({
    email:    {required: true, type: String},
    password: {required: true, type: String},
    location: {required: true, type: String},
    weatherData: [weatherSchema]
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;