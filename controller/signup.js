const userDB = require('../data/user.db');

async function signup(req, res) {
    const {email, password, location} = req.body;

    //validation

        if(!(email && location && password)) throw "All inputs are required!";
        else {
            const isExist = await userDB.isExist(email);
            if (isExist) {
                throw "Already Registered!";
            } else {
                    //success
                    const savedUser = await userDB.insert(req.body);
                    res.status(200).json({id: savedUser.id, name: savedUser.email, message: "user created successful!"});
            }
        }

}

module.exports = signup;