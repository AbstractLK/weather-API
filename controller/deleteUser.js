const userModel = require('../models/userModel');
async function deleteUser(req, res) {
    const {id} = req.query;
    try {
        await userModel.deleteOne({_id: id});
        res.status(200).json({ID: id, Message: "User deleted successfully!"});
    } catch (e) {
        console.log('Not deleted User!');
        res.json({status: "Unsuccessful!", Message: e.message});
    }
}

module.exports = deleteUser;