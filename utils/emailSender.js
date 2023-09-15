const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email',
        pass: 'pass',
    }
});

module.exports = transporter;