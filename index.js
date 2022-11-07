const express = require('express')
const sequelize = require('./db/db')
const { Sequelize } = require('./models/index')
const app = express()
const db = require('./db/db')
<<<<<<< HEAD
const router = require('./router')
=======
    // const router = require('./router')
>>>>>>> 33ab128a953fa901c4f6d1c96f29c570c20395fe


const PORT = 3002

//middleware
app.use(express.json())
    // app.use(router)


//Conexión con el servidor
app.listen(PORT, () => {
    console.log(`Servidor arrancado en el puerto ${PORT}`)

    //con sync({force: true}) se sincroniza sequelize con nuestra DB, force hace que pueda sobreescribir tablas
<<<<<<< HEAD
    //con authenticate no sobreescribe y es más ligero, pero también se sincroniza

    db.sync({ force: true }).then(() => {
=======
    //con authenticate no sobreescribe pero también se sincroniza
    sequelize.authenticate().then(() => {
>>>>>>> 33ab128a953fa901c4f6d1c96f29c570c20395fe
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
})