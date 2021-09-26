//se conectando a database
const knex = require('../database')

//tratamento da rota /funcionario
module.exports = {
    async index(req, res, next) {
        try {
            //atribuindo as variaveis do corpo da requisição
            let { username,password} = req.body
           
            const user = await knex('usuarios').where({ 'usuario': username }).first()
            //se nao existir marca insira na database
            if (user.usuario === username && user.senha === password){
                return res.status(200).send({
                    verification:true
                })
                
            } else {
                return res.status(400).json({ message: 'LOGIN FAILED' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'erro nao previsto' })
        }
    }
}