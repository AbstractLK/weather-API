const userModel = require('../models/userModel');
async function signIn(req, res) {
    const {email, password} = req.body;
    if (!(email && password)) return res.send("All inputs are required!");

    const user = await userModel.findOne({email: email});
    console.log(user);
    if (user && user.password === password) {
        return res.status(200).json({ID: user.id, Email: user.email});
    }
    return res.send("Invalid Email or Password");
}

module.exports = signIn;