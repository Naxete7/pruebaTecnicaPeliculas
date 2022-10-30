const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Prestamo extends Model {}

Alquiler.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    pelicula_id: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: 'pelicula',
                key: 'pelicula_id'
            }
        }
    }

})

module.exports = Prestamo