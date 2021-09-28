//se conectando a database
const knex = require('../database')

//tratamento da rota /funcionario
module.exports = {
    async index(req, res, next) {
        try {
            //atribuindo as variaveis do corpo da requisição
            let { username,password} = req.body
            console.log(username+" / "+ password)
            const user = await knex('usuarios').where({ 'usuario': username }).first()
            console.log(user)
            //se nao existir marca insira na database
            if (user){
                if (password === user.senha){
                    req.session.user = {
                        username: user.usuario,
                        password: user.password
                    }
                }else{
                    res.redirect("/login")
                }
            } else {
                res.redirect("/login")
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'erro nao previsto' })
        }
    }
}