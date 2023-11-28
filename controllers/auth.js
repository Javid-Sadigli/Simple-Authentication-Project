const User = require('../models/user');

module.exports = {
    POST_Register : function(req, res, next)
    {
        
    }, 
    GET_Register : function(req, res, next)
    {
        res.render("register" , {page_title : "Register", logged_in : req.logged});
    },
    CHECK_Logged_In : function(req, res, next)
    {
        if(req.session.logged)
        {
            User.findById(req.session.user_id).then(function(user)
            {
                req.user = user;
                req.logged_in = true;
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