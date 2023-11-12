module.exports = {
    SEND_ERROR : function(req, res, next)
    {
        res.status(404).send(`<h1 align="center">404 not found</h1>`);
    }
}