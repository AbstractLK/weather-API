const axios = require("axios");

const apiURL = process.env.API_URL;
const apiKEY = process.env.API_KEY;
async function weatherInfo(location){
    try{
        const response = await axios.get(apiURL+ location+ "&appid="+ apiKEY);
        return {
            temperature: response.data.main.temp,
            weatherCondition: response.data.weather[0].description
        };
    } catch (e) {
        console.error(e);
    }

}

module.exports = weatherInfo;