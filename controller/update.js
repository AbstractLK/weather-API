const userModel = require('../models/userModel');

async function userUpdate(req, res) {
    const userId = req.query.id;
    const updatedUser = req.body;
    console.log(updatedUser);

   await userModel.findByIdAndUpdate(userId, updatedUser, {new: true, runValidators:true});
   res.status(200).json({Message: "updated successfully!", data: updatedUser});

}

module.exports = userUpdate;