module.exports ={
    GET_Index : function(req, res, next) 
    {
        res.render('home.ejs', {page_title : 'Home', logged_in : req.logged_in, user : req.user});
    }, 
    GET_Profile : function(req, res, next)
    {
        res.render('profile.ejs', {page_title : 'Profile', logged_in : req.logged_in});
    }
};