//se conectando a database
const knex = require('../database')

//tratamento da rota /funcionario
module.exports = {
    async createcar(req, res, next) {
        try {
            //atribuindo as variaveis do corpo da requisição
            let { marca, modelo, versao, combustivel, km,cor,valor,ano} = req.body
            //buscando na database se existe a marca enviada pelo cliente
            km = `${km}Km`
            valor = `R$${valor}`
            const marcadb = await knex('marcas').where({ 'nome': marca }).first()
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
                    combustivel,
                    km,
                    cor,
                    valor,
                    ano,
                })
                return res.status(201).json({ message: 'Veiculo cadastrado com Sucesso' })
            } else {
                await knex('carros').insert({
                    marca_id:marcadb.id,
                    modelo,
                    versao,
                    combustivel,
                    km,
                    cor,
                    valor,
                    ano,
                })
                return res.status(201).json({ message: 'Veiculo cadastrado com Sucesso' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'erro nao previsto' })
        }
    },
    async deletecar(req, res, next){
            let  car_id  = req.params.id
            await knex('carros').where('id', car_id).del()
    
            return res.status(201).json({ message: 'Veiculo deletado com Sucesso' })
     
    }
}