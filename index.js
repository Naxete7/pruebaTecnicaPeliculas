const express = require('express')
const sequelize = require('./db/db')
const { Sequelize } = require('./models/index')
const app = express()
const db = require('./db/db')
 <!-- const router = require('./router') -->



const PORT = 3002

//middleware
app.use(express.json())
    <!-- // app.use(router) -->


//Conexión con el servidor
app.listen(PORT, () => {
    console.log(`Servidor arrancado en el puerto ${PORT}`)

    //con sync({force: true}) se sincroniza sequelize con nuestra DB, force hace que pueda sobreescribir tablas

    //con authenticate no sobreescribe y es más ligero, pero también se sincroniza

    <!-- db.sync({ force: true }).then(() => { -->

    //con authenticate no sobreescribe pero también se sincroniza
    sequelize.authenticate().then(() => {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
})