module.exports = {
    SEND_ERROR : function(req, res, next)
    {
        res.status(404).render('error');
    }
}