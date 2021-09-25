const express = require('express')

//criando as rotas e estabelecendo seus controllers
const routes = express.Router()


const carrosController = require('./controllers/carrosControler')
const getCars = require('./controllers/cars')
const getCar = require('./controllers/marcasController')


routes.get('/carros', getCars.index)
routes.get('/carros/:id', getCar.index)

routes.post('/insertcarros', carrosController.createcar)

module.exports = routes