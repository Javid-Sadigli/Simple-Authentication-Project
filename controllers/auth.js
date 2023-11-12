const User = require('../models/user');

module.exports = {
    POST_Register : function(req, res, next)
    {
        
    }, 
    CHECK_Logged_In : function(req, res, next)
    {
        if(req.session.logged)
        {
            User.findById(req.session.user_id).then(function(user)
            {
                req.user = user;
                next();
            }).catch(function(err)
            {
                console.log(err);
            });
        }   
        else
        {
            next();
        }
    }
};