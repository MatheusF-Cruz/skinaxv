const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const basicAuth = require('./helpers/basic-auth')
// const swaggerDocument = require('./swagger/swagger.json')
// const swaggerUi = require('swagger-ui-express')

const app = express()

app.use(session({
    secret: "1234", cookie: { maxAge: 30000000 },
    resave: true,
    saveUninitialized: true
}));



app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(basicAuth)

app.use(express.json())

app.use('/',routes)




//catch all
/*app.use((error, req,res,next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})*/


app.listen(3333, ()=> console.log('Server is running'))