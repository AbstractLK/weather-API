const userModel = require('../models/userModel');

async function userUpdate(req, res) {
    //res.json({id: req.query.id, message: "updated" });
    const userId = req.query.id;
    const updatedUser = req.body;
    console.log(updatedUser);
    try{
       await userModel.findByIdAndUpdate(userId, updatedUser, {new: true});
       res.status(200).send("updated successfully!");
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "update failed"});
    }
}

module.exports = userUpdate;