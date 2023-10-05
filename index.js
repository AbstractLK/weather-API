require('express-async-errors');
const errorHandler = require('./handlers/errorHandler');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/database').connect();
require('./utils/scheduler').runScheduler();

const authRoute = require('./router/auth');
const userRoute = require('./router/user');

const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:8080',
// }));

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.all('*', (req, res) => {
    res.status(404).json({status: 404, message: "Page Not Found!"});
});

app.use(errorHandler);

app.listen(process.env.APP_PORT, () => {
    console.log(process.env.APP_NAME + " stated at port " + process.env.APP_PORT);
})
//scheduler();