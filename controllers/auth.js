const User = require('../models/user');

module.exports = {
    POST_Register : function(req, res, next)
    {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;

        const user = new User({
            email: email,
            username: username,
            password: password
        })
        user.save().then(function(user)
        {
            res.redirect('/register');
        }).catch(function(err)
        {
            console.log(err);
        });
    }, 
    POST_Login : function(req, res, next)
    {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;

        User.findOne({
            username : username,
            password : password, 
            email : email
        }).then(function(user)
        {
            if(user)
            {
                req.session.logged = true;
                req.session.user_id = user._id;
                res.redirect('/');
            }
            else
            {
                res.redirect('/login');
            }
        }).catch(function(err)
        {
            console.log(err);
        });
    },
    GET_Register : function(req, res, next)
    {
        res.render("register" , {page_title : "Register", logged_in : req.logged});
    },
    GET_Login : function(req, res, next)
    {
        res.render("login" , {page_title : "Login", logged_in : req.logged});
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