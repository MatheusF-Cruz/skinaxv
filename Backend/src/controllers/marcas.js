const knex = require('../database')


module.exports = {
    async index(req,res) {
        let  marca_id  = req.params.id
        const results = await knex.select('nome').from('marcas').where({ 'id': marca_id })

        return res.json(results)
    },
}