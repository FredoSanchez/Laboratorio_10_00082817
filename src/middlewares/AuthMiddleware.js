const mogoose = require('mongoose');
const User = require("../models/user");
const AuthMiddleware = {};

AuthMiddleware.isAuthentication = function (req, res, next){
    if (!req.session.user){
        return res.redirect('/');
    } else {
        bcrypt.compare(data.userId, user._id.toString(), function(err, result){
            if (result = true){
                return res.redirect('/');
            }else{
                return next(err);
            }
        });
    }
}