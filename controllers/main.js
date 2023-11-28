module.exports ={
    GET_Index : function(req, res, next) 
    {
        res.render('home.ejs', {page_title : 'Home', logged_in : req.logged_in});
    }
};