const mongoose = require('mongoose');

exports.connect = () => {
    //database connection
    const database = mongoose.connect(process.env.DATABASE_URL);
    database.then(res => {
        console.log('Database connected');
    });
    database.catch(error => {
        console.log('Database error');

    });
}