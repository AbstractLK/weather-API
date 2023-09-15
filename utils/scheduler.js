const cron = require('node-cron');
const transporter = require('./emailSender');
const userModel = require('../models/userModel');
const axios = require('axios');
const url = "http://localhost:3001/auth/insertWeather?id=";

function runScheduler() {
    cron.schedule('0 */3 * * *', async () => {
        try {
            const users = await  userModel.find();
            for (const user of users) {
                const response = await axios.get(url + (await user).id);
                const tmp = response.data.temperature-273.15;
                const emailContent = `
                    Hello ${user.email},
                    Here is the weather report for your location: ${user.location}.
                    Date: ${new Date()}
                    temperature: ${tmp.toFixed(1)} Celsius
                    weatherCondition: ${response.data.weatherCondition}
                `;
                const mailOption = {
                    from: 'kaveelook@gmail.com',
                    to: user.email,
                    subject: 'Weather Report',
                    text: emailContent
                };

                //send the email
                await transporter.sendMail(mailOption);
                //console.log(mailOption);
            }
            console.log('weather reports sent successfully!');
        } catch (e) {
            console.error('Error sending weather reports:', e);
        }
    });
    console.log('Scheduler started');
}

module.exports = runScheduler;