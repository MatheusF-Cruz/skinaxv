//se conectando a database
const knex = require('../database')

//tratamento da rota /funcionario
module.exports = {
    async createcar(req, res, next) {
        try {
            //atribuindo as variaveis do corpo da requisição
            let { marca, modelo, versao, ano, valor} = req.body
            //buscando na database se existe a marca enviada pelo cliente
            const marcadb = await knex('marcas').where({ 'nome': marca }).first()
            let marca_id
            //se nao existir marca insira na database
            if (!marcadb) {
                await knex('marcas').insert({
                    nome:marca
                })

                const marcadb = await knex('marcas').where({ 'nome': marca }).first()
                await knex('carros').insert({
                    marca_id:marcadb.id,
                    modelo,
                    versao,
                    ano,
                    valor
                })
                return res.status(201).json({ message: 'Veiculo cadastrado com Sucesso' })
            } else {
                await knex('carros').insert({
                    marca_id:marcadb.id,
                    modelo,
                    versao,
                    ano,
                    valor
                })
                return res.status(201).json({ message: 'Veiculo cadastrado com Sucesso' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'erro nao previsto' })
        }
    }
}