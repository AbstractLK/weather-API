const errorHandler = async (error, req, res, next) => {
    if (error){
        console.log(error);
        if(error.message){
            res.status(400).json({
                status: "failed",
                message: error.message
            });
        } else {
            res.status(400).json({
                status: "failed",
                message: error
            });
        }
        return;
    } else
        next();
};

module.exports = errorHandler;