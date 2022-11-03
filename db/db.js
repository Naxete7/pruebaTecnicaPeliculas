const config = require('../config/config.json')
const { Sequelize } = require('sequelize')
require('dotenv').config() // Dotenv es un módulo de dependencia cero que carga variables de entorno

const sequelize = new Sequelize(

    //DB con Dotenv
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT
    }

    //CONFIG DE LA DB SIN DOTENV
    //     config.development.database,
    //     config.development.username,
    //     config.development.password, {
    //         host: config.development.host,
    //         port: config.development.port,
    //         dialect: config.development.dialect
    //     }
)

module.exports = sequelize