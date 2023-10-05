const userModel = require("../models/userModel");

async function userGetAll(req, res){
    const users = await userModel.find();
    if (!(users[0])) throw "Not found User data!";
    res.status(200).json(users);
}

module.exports = userGetAll;