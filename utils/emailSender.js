const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kaveelook@gmail.com',
        pass: 'qnjyncurnaimhuns',
    }
});

module.exports = transporter;