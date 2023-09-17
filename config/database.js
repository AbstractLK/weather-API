const mongoose = require('mongoose');

exports.connect = () => {
    //database connection
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Database connected');
    })
    .catch(() => {
        console.log('Database error');

    });
}