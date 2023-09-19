const userDB = require('../data/user.db');

async function signup(req, res) {
    const data = req.body;
    const isExist = await userDB.isExist(data.email);
    if (isExist) {
        console.log('Already Registered!');
        res.send('Already Registered!');
    } else {
        try {
            const savedUser = await userDB.insert(data);
            res.status(200).json({id: savedUser.id, name: savedUser.email, message: "user created successful!"});
            console.log("user created successful!");
        } catch (e) {
            console.log(e + ' ');
            res.status(400).json({message: 'user registration failed !'});
        }
    }
}

module.exports = signup;