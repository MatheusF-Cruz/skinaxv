//se conectando a database
const knex = require('../database')
const { index } = require('./cars')

//tratamento da rota /funcionario
module.exports = {
    async index(req , res ) {
        const marca_id = req.params.id
        const result = await knex('carros').where({ 'marca_id': marca_id })
        if (result.length > 0) {
            res.status(200)
            return res.json(result)
        } else {
            res.status(404)
            return res.json({ err: 'Registro não encontrado' })
        }
    },
}