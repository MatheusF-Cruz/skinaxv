const knex = require('..database')

function auth(req, res, next) {

    if (req.session.user != undefined) {
        const user = await knex('usuarios').where({ 'usuario': req.session.user }).first()
        if(user){

            if(req.session.user.password === user.senha && req.session.user.username === user.usuario ){
                res.status(200)
                next();
            }else{
                res.redirect("/login").status(401)
            }
        }else{
            res.redirect("/login").status(401)
        }
        
    } else {
        res.redirect("/login").status(401)
    }
}

module.exports = auth;