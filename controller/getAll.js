const userModel = require("../models/userModel");

async function userGetAll(req, res){
    const users = await userModel.find();
    res.status(200).json(users);
}

module.exports = userGetAll;