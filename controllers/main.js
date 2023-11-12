module.exports ={
    GET_Index : function(req, res, next) 
    {
        const logged = req.user != undefined; 
        res.render('home.ejs', {page_title : 'Home', logged_in : logged});
    }
};