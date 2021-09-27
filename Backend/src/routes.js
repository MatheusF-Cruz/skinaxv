const express = require('express')

//criando as rotas e estabelecendo seus controllers
const routes = express.Router()


const carrosController = require('./controllers/carrosControler')
const getCars = require('./controllers/cars')
const getCar = require('./controllers/marcasController')
const getMarca = require('./controllers/marcas')
const login = require('./controllers/login')
const auth = require('./middlewares/auth')

routes.get('/carros', getCars.index)
routes.get('/carros/:id', getCar.index)

routes.post('/insertcarros', auth, carrosController.createcar)

routes.get('/marca/:id', getMarca.index)

routes.post('/auth',login.index)


routes.delete('/deletecarros/:id', auth, carrosController.deletecar)
module.exports = routes