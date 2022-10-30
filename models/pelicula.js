const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Pelicula extends Model {}

Pelicula.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
    },
    duracion: {
        type: DataTypes.TIME,
        allowNull: false
    },
    temporadas: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    fechaEstreno: {
        type: DataTypes.DATE,
        allowNull: false
    }

})

module.exports = Pelicula