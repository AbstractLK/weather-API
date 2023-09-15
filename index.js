const express = require('express');
const scheduler = require('./utils/scheduler');
//const cors = require('cors');
require('dotenv').config();
require('./config/database').connect();

const authRoute = require('./router/auth');
const authUser = require('./router/user');

const app = express();
app.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:3000',
// }));

app.use('/auth', authRoute);
app.use('/user', authUser);


app.listen(process.env.APP_PORT, () => {
    console.log(process.env.APP_NAME + " stated at port " + process.env.APP_PORT);
})
scheduler();