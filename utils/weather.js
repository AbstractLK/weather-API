const axios = require("axios");

const apiURL = process.env.API_URL;
const apiKEY = process.env.API_KEY;
async function weatherInfo(location){
    try{
        const response = await axios.get(apiURL+ location+ "&appid="+ apiKEY);
        const temp = (response.data.main.temp-273.15).toFixed(1);
        const condition = response.data.weather[0].description;
        return {
            temperature: temp,
            weatherCondition: condition
        };
    } catch (e) {
        console.log(e);
    }

}

module.exports = weatherInfo;