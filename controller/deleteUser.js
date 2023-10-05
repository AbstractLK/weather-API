const userModel = require('../models/userModel');
async function deleteUser(req, res) {
    const {id} = req.query;
    const user = await userModel.findOne({_id:id});
    if(!user) throw "User not found";
    await userModel.deleteOne({_id: id});
    res.status(200).json({ID: id, Message: "User deleted successfully!"});
}

module.exports = deleteUser;