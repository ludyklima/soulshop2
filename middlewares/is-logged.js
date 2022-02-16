module.exports = function (req, res, next)  {
    // verifica se o usuário está logado, e decide se o usuário continua ou não
    if(req.session.user){
        next()
        return;
    }
    
    res.redirect('/login')
};